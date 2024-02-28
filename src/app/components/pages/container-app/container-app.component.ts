import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';

@Component({
    selector: 'app-container-app',
    templateUrl: './container-app.component.html',
    styleUrls: ['./container-app.component.scss'],
    standalone: true,
    imports: [ToolbarComponent, RouterOutlet]
})
export class ContainerAppComponent implements OnInit {

  constructor(){}

  ngOnInit() {
    
  }

}
