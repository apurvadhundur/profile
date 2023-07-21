import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileHeaderComponent } from './profile/profile-header.component';
import { ProfileBannerComponent } from './profile/profile-banner.component';
import { ProfileExperienceComponent } from './profile/profile-experience.component';
import { ProfileEducationComponent } from './profile/profile-education.component';
import { ProfileOtherComponent } from './profile/profile-other.component';
import { LanguageViewComponent } from './profile/language-view.component';
import { RatingModule } from 'primeng/rating';

const appRoutes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProjectsComponent,
    ProfileHeaderComponent,
    ProfileBannerComponent,
    ProfileExperienceComponent,
    ProfileEducationComponent,
    ProfileOtherComponent,
    LanguageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    RatingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
