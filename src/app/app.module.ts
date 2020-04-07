import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurPhilosophyComponent } from './our-philosophy/our-philosophy.component';
import { OurSkillsComponent } from './our-skills/our-skills.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FollowUsComponent } from './follow-us/follow-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OurServicesComponent,
    OurTeamComponent,
    OurPhilosophyComponent,
    OurSkillsComponent,
    ContactUsComponent,
    FollowUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
