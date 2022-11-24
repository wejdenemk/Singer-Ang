import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSingerComponent } from './add-singer/add-singer.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeBandsComponent } from './liste-bands/liste-bands.component';
import { LoginComponent } from './login/login.component';
import { RechercheParBandComponent } from './recherche-par-band/recherche-par-band.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SingerGuard } from './singer.guard';
import { SingersComponent } from './singers/singers.component';
import { UpdateSingerComponent } from './update-singer/update-singer.component';


const routes: Routes = [
  {path: "singers", component : SingersComponent},
  {path: "addsinger", component: AddSingerComponent , canActivate:[SingerGuard]},
  {path: "updateSinger/:id", component: UpdateSingerComponent},
  {path: "", redirectTo: "singers", pathMatch: "full" },
  {path: "rechercheParBand", component :RechercheParBandComponent},
  {path: "listeBands", component : ListeBandsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
