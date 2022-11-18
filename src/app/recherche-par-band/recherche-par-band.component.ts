import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Band } from '../model/band.model';
import { Singer } from '../model/singer.model';
import { SingerService } from '../services/singer.service';

@Component({
  selector: 'app-recherche-par-band',
  templateUrl: './recherche-par-band.component.html',
  styleUrls: ['./recherche-par-band.component.css']
})
export class RechercheParBandComponent implements OnInit {
  singers! : Singer[];
  IdBand! : number;
  bands! : Band[];
  constructor(private singerService: SingerService,private router :Router) { }
  
  ngOnInit(): void {
    this.singerService.listeBands().subscribe(bands => {this.bands = bands._embedded.bands;
    console.log(bands);
    });
    }

    onChange() {
      this.singerService.rechercherParBand(this.IdBand).
      subscribe(singers =>{this.singers=singers});
      }

}
