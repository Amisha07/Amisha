import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



//service
import { DataService } from './data.service';
import { PeopleService } from './peopleservice.service';

//componet
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FamilyComponent } from './family/family.component';
import { MemberComponent } from './member/member.component';
import { AgeComponent } from './age/age.component';
import { RelationComponent } from './relation/relation.component';
import { MyserviceComponent } from './myservice/myservice.component';
import { PersondetailComponent } from './persondetail/persondetail.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'myservice', component: MyserviceComponent },
  { path: 'person', component: PersondetailComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    FamilyComponent,
    MemberComponent,
    AgeComponent,
    RelationComponent,
    MyserviceComponent,
    PersondetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DataService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }


