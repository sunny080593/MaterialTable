import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-bean',
  templateUrl: './file-bean.component.html',
  styleUrls: ['./file-bean.component.scss']
})
export class FileBeanComponent implements OnInit {
  fileId:number
  constructor(private router: Router) { }

  ngOnInit() {
    this.fileId=10;
  }
  onClick()
  {
    console.log('My file Id '+this.fileId);
    this.router.navigate(['/chi',{"fileId":this.fileId}]);
  }
}
