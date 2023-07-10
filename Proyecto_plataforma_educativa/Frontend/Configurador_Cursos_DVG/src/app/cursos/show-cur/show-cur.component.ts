import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-cur',
  templateUrl: './show-cur.component.html',
  styleUrls: ['./show-cur.component.css']
})
export class ShowCurComponent implements OnInit {

  constructor(private service:SharedService) { }

  CursoList:any=[];

  ngOnInit(): void {
    this.refreshCurList();
  }


  refreshCurList(){
    this.service.getCurList().subscribe(data=>{
      this.CursoList=data;
    });
  }


}
