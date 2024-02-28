import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    standalone: true,
    imports: [MatToolbarModule, MatIconModule, RouterLink, MatSidenavModule, MatListModule, MatDividerModule, RouterOutlet]
})
export class AdminComponent {
  public opened = false;

  constructor(){}

  ngOnInit() {}

}
