import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SidesComponent } from './sides/sides.component';
import { BurgerComponent } from './burger/burger.component';

const routes: Routes = [
  { path: '', component: SidesComponent},
  { path: 'contactus', component: ContactusComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'burger', component: BurgerComponent},
  { path: 'sides', component: SidesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
