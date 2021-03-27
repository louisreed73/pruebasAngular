import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children:[
    { path: 'home', component: HomeComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
  ] },
  { path: '**', redirectTo: 'home' }
  
];

@NgModule({
  declarations:[
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  DocumentsComponent,
  SearchComponent

],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
