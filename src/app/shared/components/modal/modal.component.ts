import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { NewPostComponent } from '../../../components/posts/new-post/new-post.component';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    standalone: true,
    imports: [MatDialogModule, NewPostComponent]
})
export class ModalComponent {

  constructor(public dialog: MatDialogRef<ModalComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
