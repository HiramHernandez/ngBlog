import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.scss'],
    standalone: true
})
export class EditPostComponent {
  private image: any;
  private imageOriginal: any;

  public editPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    titlePost: new FormControl('', Validators.required),
    contentPost: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required),
  });

  constructor(){}

  ngOnInit() {
  
    this.initValuesForm();
  }

  editPost(post: any) {
   
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

  private initValuesForm(): void {
    this.editPostForm.patchValue({
      id: "1",
      titlePost: "Enfermedades Cardio Vasculares",
      contentPost: "Enfermedades Cardio Vasculares",
      tagsPost: "#salud"
    });
  }

}
