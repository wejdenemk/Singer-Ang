import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Band } from '../model/band.model';

@Component({
  selector: 'app-update-band',
  templateUrl: './update-band.component.html',
  styleUrls: ['./update-band.component.css']
})
export class UpdateBandComponent implements OnInit {
  @Input()
  band! : Band;
  
  @Output()
  bandUpdated = new EventEmitter<Band>();
  
  @Input()
ajout!:boolean;

  constructor() {}

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.band);
  }

  saveBand(){
    this.bandUpdated.emit(this.band);
    }

}
