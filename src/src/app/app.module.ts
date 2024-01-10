import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { TrainingComponent } from './training/training.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsCertificationComponent } from './training/skills-certification/skills-certification.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    EducationComponent,
    WorkExperienceComponent,
    TrainingComponent,
    ReferencesComponent,
    SkillsCertificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
