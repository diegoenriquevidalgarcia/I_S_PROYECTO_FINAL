import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-estu',
  templateUrl: './show-estu.component.html',
  styleUrls: ['./show-estu.component.css']
})
export class ShowEstuComponent implements OnInit {

  constructor(private service:SharedService) { }

  EstudianteList:any=[];

  ngOnInit(): void {
    this.refreshEstuList();
  }


  refreshEstuList(){
    this.service.getEstuList().subscribe(data=>{
      this.EstudianteList=data;
    });
  }


}
