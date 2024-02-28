import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
    imports: [CommonModule, AdminRoutingModule, MaterialModule, AdminComponent]
})
export class AdminModule { }
