import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusiciansComponent } from "./musicians/musicians.component";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MusicanDetailComponent } from "./musican-detail/musican-detail.component";

const routes: Routes = [
  { path: 'musicians', component: MusiciansComponent },
  {path: 'index', component: AppComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: MusicanDetailComponent},
  { path: '', redirectTo: '/musicians', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
