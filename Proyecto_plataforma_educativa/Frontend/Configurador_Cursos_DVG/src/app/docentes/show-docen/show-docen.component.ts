import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-docen',
  templateUrl: './show-docen.component.html',
  styleUrls: ['./show-docen.component.css']
})
export class ShowDocenComponent implements OnInit {

  constructor(private service:SharedService) { }

  DocenteList:any=[];

  ngOnInit(): void {
    this.refreshDocenList();
  }


  refreshDocenList(){
    this.service.getDocenList().subscribe(data=>{
      this.DocenteList=data;
    });
  }


}