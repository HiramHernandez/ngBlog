import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  public appName = 'ngBlog';
  constructor(public authSvc: AuthService) { }

  ngOnInit() { }

  onLogout(): void {

  }
}
