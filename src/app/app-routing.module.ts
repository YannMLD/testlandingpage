import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'Accueil', component: HomeComponent },
  { path: 'features', title: 'Fonctionnalités', component: FeaturesComponent },
  { path: 'about', title: 'A propos', component: AboutComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'privacy', title: 'Politique de vie privée', component: PrivacyPolicyComponent },
  { path: '**', title: "Cette page n'existe pas", component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
