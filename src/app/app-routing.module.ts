import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {LogComponent} from './log/log.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {HttpServiceComponent} from './http-service/http-service.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'log',
    component: LogComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'service',
    component: HttpServiceComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
