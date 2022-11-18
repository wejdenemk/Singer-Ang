import { Component, OnInit } from '@angular/core';
import { Singer } from '../model/singer.model';
import { SingerService } from '../services/singer.service';
import { Band } from '../model/band.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-singer',
  templateUrl: './add-singer.component.html',
  styleUrls: ['./add-singer.component.css']  
})
export class AddSingerComponent implements OnInit {

  newSinger = new Singer();

  message : string="";

 bands! : Band[];
newIdBand! : number;
newBand! : Band;

  constructor(private singerService: SingerService,private router :Router) { }

  addSinger(){
    this.newSinger.band = this.bands.find(band => band.idBand == this.newIdBand)!;
    this.singerService.ajouterSinger(this.newSinger)
    .subscribe(singer => {
    console.log(singer);
    this.router.navigate(['singers']);
    });
    }

    ngOnInit(): void {
      this.singerService.listeBands().
      subscribe(bands => {console.log(bands);
      this.bands = bands._embedded.bands;
      }
      );
      }


  


}
