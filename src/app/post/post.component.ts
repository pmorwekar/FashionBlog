import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  postid;
  imgurl;

  arr = [1, 2, 3, 4, 5, 6];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      setTimeout(() => {}, 1000);
      this.postid = params.pid;
      this.getPost(this.postid);
      this.imgurl =
        "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
    });
  }

  getPost(pid) {
    //Get from firebase
  }
}
