import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { DetailsPostsComponent } from './components/posts/details-pos/details-posts.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    ContainerAppComponent,
    DetailsPostsComponent,
    EditPostComponent,
    NewPostComponent,
    ModalComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
