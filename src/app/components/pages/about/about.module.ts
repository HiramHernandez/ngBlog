import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
    imports: [
        CommonModule, AboutRoutingModule, MaterialModule,
        AboutComponent
    ]
})
export class AboutModule { }
