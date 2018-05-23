import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';    //importing custom made injectable (service)

@Component({
  selector: 'app-image-list',
  // templateUrl: './image-list.component.html',
  templateUrl: './image-list-new.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images : any = [];    //holds results returned by Pixabay API
  queryingAPI: boolean = false;    //to show progress bar
  imagesFound : boolean = false;    //flag to indicate images found

  constructor(private _imageService : ImageService) { }

  ngOnInit() {
  }

  public searchImages(inputQuery : string){
    this.queryingAPI = true;
    this._imageService.getImage(inputQuery).subscribe(data => { 
      console.log(data);
      this.images=data["hits"];
      this.imagesFound = true;
      this.queryingAPI = false;
    });
  }

}

//geneated using angular CLI
//command : ng generated component image-list