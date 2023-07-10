import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-ven',
  templateUrl: './show-ven.component.html',
  styleUrls: ['./show-ven.component.css']
})
export class ShowVenComponent implements OnInit {

  constructor(private service:SharedService) { }

  VentaList:any=[];

  ngOnInit(): void {
    this.refreshVenList();
  }


  refreshVenList(){
    this.service.getVenList().subscribe(data=>{
      this.VentaList=data;
    });
  }


}
