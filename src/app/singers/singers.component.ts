import { Component, OnInit } from '@angular/core';
import { Singer } from '../model/singer.model';
import { AuthService } from '../services/auth.service';
import { SingerService } from '../services/singer.service';

@Component({
  selector: 'app-singers',
  templateUrl: './singers.component.html',
})
export class SingersComponent implements OnInit {

  singers?: Singer[];
  
  constructor(private singerService : SingerService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.chargerSingers();
  }


  chargerSingers(){
    this.singerService.listeSingers().subscribe(singers => {
    console.log(singers);
    this.singers = singers;
    });
    }

    
    supprimerSinger(s: Singer)
    {
    let conf = confirm("Are you sure?");
    if (conf)
    this.singerService.supprimerSinger(s.idSinger).subscribe(() => {
    console.log("Singer deleted");
    this.chargerSingers();
    });
    } 


}
