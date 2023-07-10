import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-matri',
  templateUrl: './show-matri.component.html',
  styleUrls: ['./show-matri.component.css']
})
export class ShowMatriComponent implements OnInit {

  constructor(private service:SharedService) { }

  MatriculaList:any=[];

  ngOnInit(): void {
    this.refreshMatriList();
  }


  refreshMatriList(){
    this.service.getMatriList().subscribe(data=>{
      this.MatriculaList=data;
    });
  }


}