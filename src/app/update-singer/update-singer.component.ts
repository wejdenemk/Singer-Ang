import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Band } from '../model/band.model';
import { Singer } from '../model/singer.model';
import { SingerService } from '../services/singer.service';


@Component({
  selector: 'app-update-singer',
  templateUrl: './update-singer.component.html',
  styleUrls: ['./update-singer.component.css']
})
export class UpdateSingerComponent implements OnInit {

  currentSinger = new Singer();

  bands!: Band[];
  updatedBandId!: number;
  constructor(private activatedRoute: ActivatedRoute, private singerService: SingerService, private router: Router,) {

  }

  ngOnInit(): void {
    this.singerService.listeBands().
    subscribe(bands => {console.log(bands);
    this.bands = bands._embedded.bands;
    }
    );
    this.singerService.consulterSinger(this.activatedRoute.snapshot.params['id']).
    subscribe( singer =>{ this.currentSinger = singer;
    this.updatedBandId = this.currentSinger.band.idBand;
    } ) ;
    }

    updateSinger() {
      this.currentSinger.band = this.bands.find(band => band.idBand == this.updatedBandId)!;
      this.singerService.updateSinger(this.currentSinger).subscribe(singer => {
      this.router.navigate(['singers']); }
      );
      }
}
