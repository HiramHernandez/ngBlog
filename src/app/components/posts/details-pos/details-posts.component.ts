import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/shared/models/pos.interface';
@Component({
  selector: 'app-details-posts',
  templateUrl: './details-posts.component.html',
  styleUrls: ['./details-posts.component.scss']
})
export class DetailsPostsComponent {
  //public post$: Observable<PostI>;

  constructor(private route: ActivatedRoute, private postSvc: PostService) { }

  ngOnInit() {
    const idPost = this.route.snapshot.params['id'];
    
  }
}
