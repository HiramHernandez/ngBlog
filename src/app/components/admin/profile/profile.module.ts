import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [ CommonModule, ProfileRoutingModule, MaterialModule, ReactiveFormsModule ]
})
export class ProfileModule { }
