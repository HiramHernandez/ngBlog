import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostRoutingModule } from './list-post-routing.module';
import { ListPostsComponent } from './list-posts.component';
import { MaterialModule } from '../../../material.module';
import { TableComponent } from '../../../shared/components/table/table.component';

@NgModule({
    imports: [CommonModule, ListPostRoutingModule, MaterialModule, ListPostsComponent, TableComponent]
})
export class ListPostModule { }
