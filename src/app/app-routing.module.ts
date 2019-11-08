import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarreradetaillComponent }from './carreradetaill/carreradetaill.component';
import { GeneralComponent } from './general/general.component';
import { SubjectdetallComponent }from './subjectdetall/subjectdetall.component';



const routes: Routes = [

    {path: 'general', component: GeneralComponent},
    {path: 'detall/:nameAsig', component: SubjectdetallComponent},
    {path: 'carrera/:nameCarre', component: CarreradetaillComponent},
    {path: '', redirectTo: 'general', pathMatch: 'full'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }