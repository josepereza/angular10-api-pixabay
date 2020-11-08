import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import {Hit} from '../models/hit'



@Injectable({
  providedIn: 'root'
})
export class GalleryService {
public mc:string="africa";
  constructor(private http:HttpClient) { }
  getPhoto(mc){
    return this.http.get("https://pixabay.com/api/?key=Your API key&q="+mc+"&per_page=200&page=1")
  .pipe(map((data:any)=>data.hits)
  )}
}
