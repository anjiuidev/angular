import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  Images:any;
  constructor(private galleryService:GalleryService) { }

  ngOnInit() {
    this.Images = this.galleryService.getImages();
  }

}
