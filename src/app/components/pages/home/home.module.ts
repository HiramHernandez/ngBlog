import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HomeComponent
    ]
})
export class HomeModule { }
