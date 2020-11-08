import { Component, OnInit } from '@angular/core';
import { GalleryService} from '../services/gallery.service'
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public lesPhotos: any;
  public p: number = 0;
  public moCle: string = 'Africa';
  public messageVide: string = '';

  constructor(private galleryservice:GalleryService) { }

  ngOnInit() {
    this.onSearchPhoto(this.moCle);
  }

  onSearchPhoto(value: any) {
    this.moCle = value.keyword;
    this.galleryservice.getPhoto(this.moCle)
      .subscribe(data => {
        if (data.length == 0) {
          let mcl = value.keyword;
          this.messageVide = "No hay fotos"+ mcl.toUpperCase();
        } else {
          console.log(this.lesPhotos)
          this.lesPhotos = data;
          this.messageVide=""
        }
      }, error => {
        console.log(error);
      });
    this.moCle = '';
  }

}
