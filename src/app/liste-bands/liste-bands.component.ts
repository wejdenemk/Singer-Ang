import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Band } from '../model/band.model';
import { SingerService } from '../services/singer.service';

@Component({
  selector: 'app-liste-bands',
  templateUrl: './liste-bands.component.html',
  styleUrls: ['./liste-bands.component.css']
})
export class ListeBandsComponent implements OnInit {


  bands! : Band[];

  ajout:boolean=true;

  updatedBand:Band = {
    "idBand": 0, "nomBand": "","typeMBand": ""};
constructor(private singerService : SingerService) { }
ngOnInit(): void {
this.singerService.listeBands().
subscribe(bands => {this.bands = bands._embedded.bands;
console.log(bands);
});}

bandUpdated(band:Band){
  console.log("Cat updated event",band);
  this.singerService.ajouterBand(band).
   subscribe( ()=> this.chargerBands());
  }

  chargerBands(){
    this.singerService.listeBands().
    subscribe(bands => {this.bands = bands._embedded.bands;
    console.log(bands);
    });
    }

    updateBand(band:Band) {
      this.updatedBand=band;
      this.ajout=false;
      }
 


}
