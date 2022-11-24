import { Component, OnInit } from '@angular/core';
import { SingerService } from '../services/singer.service';
import { Singer } from '../model/singer.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  constructor(private singerService: SingerService) { }

  

    allSingers! : Singer[];
searchTerm!: string;
singers! : Singer[];

ngOnInit(): void {
this.singerService.listeSingers().subscribe(sgns => {
console.log(sgns);
this.allSingers = sgns;
});
}

onKeyUp(filterText : string){
this.singers = this.allSingers.filter(item =>
item.nomSinger.toLowerCase().includes(filterText));
}

}
