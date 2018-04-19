import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';    //importing custom made injectable (service)

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images : any = [];

  constructor(private _imageService : ImageService) { }

  ngOnInit() {
  }

}

//geneated using angular CLI
//command : ng generated component image-list