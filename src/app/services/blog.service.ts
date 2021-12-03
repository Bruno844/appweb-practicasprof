import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogI } from '../models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogCollection! : AngularFirestoreCollection<BlogI>

  constructor(private firestoredb: AngularFirestore) {
    this.blogCollection = this.firestoredb.collection<BlogI>('blogs')
  }

  obtenerBlogs(){
    return this.blogCollection!.snapshotChanges().pipe(
      map(action => action.map(a => a.payload.doc.data() as BlogI))
    )
  }

  agregarBlog(data: BlogI){
    return new Promise(async (resolve, reject)=>{
      try{
        const id = this.firestoredb.createId();
        data.id = id;
        const result = await this.blogCollection.doc(id).set(data);
        resolve(result);
      }catch(err){
        reject(err);
      }
    })
  }

  eliminarBlog(id: string){
    return new Promise(async(resolve,reject)=>{
      try{
        const result = await this.blogCollection.doc(id).delete();
        resolve(result);
      }catch(err){
        reject(err);
      }
    })
  }

  editarBlog(id:string, infoBlog:BlogI){
    return new Promise(async (resolve,reject)=>{
      try{
        const result = await this.firestoredb.collection('blogs').doc(id).update(infoBlog);
        resolve(result)
      }catch(error){
        reject(error);
      }
    })
  }





}
