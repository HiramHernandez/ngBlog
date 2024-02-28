import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    standalone: true,
    imports: [MatToolbarModule, RouterLink, RouterLinkActive, MatButtonModule]
})
export class ToolbarComponent {
  public appName = 'ngBlog';
  constructor(public authSvc: AuthService) { }

  ngOnInit() { }

  onLogout(): void {

  }
}
