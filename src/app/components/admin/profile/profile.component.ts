import { Component } from '@angular/core';
import { FileI } from './../../../shared/models/file.interface';
import { UserI } from './../../../shared/models/user.interface';
import { AuthService } from './../../../shared/services/auth.service';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public image?: FileI;
  public currentImage = 'https://picsum.photos/id/113/150/150';

  public profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl({ value: '', disabled: true }, Validators.required),
    photoURL: new FormControl('', Validators.required),
  });

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    
  }

  private initValuesForm(user: UserI): void {
    if (user.photoURL) {
      this.currentImage = user.photoURL;
    }

    this.profileForm.patchValue({
      displayName: user.displayName,
      email: user.email,
    });
  }

  handleImage(image: FileI): void {
    this.image = image;
  }

}
