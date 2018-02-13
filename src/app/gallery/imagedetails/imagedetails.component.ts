import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css']
})
export class ImagedetailsComponent implements OnInit {

  Images:any;
  imageId:number;
  singleImage:any;
  
  constructor(private galleryService:GalleryService, private route: ActivatedRoute, private location: Location) { 
    
  }

  ngOnInit() {
    this.Images = this.galleryService.getImages();
    this.imageId = this.route.snapshot.params.id;
    this.singleImage = this.galleryService.getSingleImage(this.imageId)[0];
    // this.singleImage = this.Images.filter(image => image.id == this.imageId);    
  }
  
  goBack(){
    this.location.back();
  }

}
