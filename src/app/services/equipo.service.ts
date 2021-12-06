import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { EquipoI } from '../models/equipo.interface';
import {finalize, map} from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private equipoCollection!:AngularFirestoreCollection<EquipoI>;

  private urlImagen:any = '';

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
    //de la coleccion de la base de datos, que seria equipo, lo alamcene en equipocollecion, siempre trayendo los valores que muestra la interfaz EquipoI 
    this.equipoCollection = this.firestore.collection<EquipoI>('equipos')
  }

  obtenerMiembrosEquipo(){
    return this.equipoCollection!.snapshotChanges().pipe(
      map(action=> action.map(a => a.payload.doc.data()as EquipoI))
    )
  }

  //agregamos un miembro del equipo a nuestra base de datos, en firestore
  AgregarMiembro(equipo: EquipoI){
    return new Promise( async (resolve,reject)=>{
      try{
        //generamos un id automatico y se lo asignamos al miembro del equipo que se cree
        const id = this.firestore.createId();
        equipo.id = id;

        const result = await this.equipoCollection.doc(id).set(equipo);
        resolve(result);
      }catch (err: any){
        reject(err.message);
        //en caso que no se pueda por x motivos, se lanzara un error
      }
    })
  }

  //ahora al eliminar un elemento, le traemos el id que se le asigno, entonces lo elimina por el id
  EliminarMiembro(id: string){
    return new Promise( async (resolve, reject)=>{
      try{
        const result = await this.equipoCollection.doc(id).delete();
        resolve(result);
      }catch(err){
        reject(err);
      }
    })
  }

  //y para editar algun miembro, se le pasa el id y la info de ese miembro,tomando los datos de la interfaz,
  //luego llamamos a la coleccion que esta en nuestra base de datos,tomamos el id de ese miembro y lo actualizamos,tomando los valores que haya modificado
  editarMiembro(id:string, infoMiembro: EquipoI){
    return new Promise( async (resolve, reject)=>{
      try{
        const result = await this.firestore.collection('equipos').doc(id).update(infoMiembro);
        resolve(result);
      }catch(err){
        reject(err);
      }
    })
  }


  //apartado en el cual hacemos la subida de la imagen del miembro del equipo a traves de su computadora
  subirImagen(file: File, miembro:EquipoI, idMiembro?:string){
    //creamos la ruta en donde se almacene la imagen
    const rutaImg = `imagenes/foto-perfil/${file.name}`;
    //creamos la referencia a la imagen subida
    const refImg = this.storage.ref(rutaImg);
    //y ahora si, la subimos al storage
    const tarea = this.storage.upload(rutaImg, file);

    //ahora obtenemos la referencia de la img,osea la url y la descargamos
    tarea.snapshotChanges().pipe(
      finalize(()=>{
        refImg.getDownloadURL().subscribe((url=>{
          this.urlImagen = url;

          //agrego la url de la imagen al miembro del equipo en cuestion
          miembro.url = this.urlImagen;
          //en esta funcion,queremos saber si quiere editar o agregar un miembro de equipo, y en el caso que venga con un id, es por que quiere editarlo, si no viene con ninguna referencia de algo, es por que quiere agregar uno nuevo
          if(idMiembro){
            this.editarMiembro(idMiembro, miembro);
          }else{
            this.AgregarMiembro(miembro);
          }
        }))
      })
    ).subscribe();
  }




}
