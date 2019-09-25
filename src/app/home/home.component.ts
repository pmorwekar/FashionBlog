import { Component, OnInit } from "@angular/core";
import { UserService } from "../user-service/user.service";

@Component({
  selector: "app-homie",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  posts;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getPosts("adssada");

    this.userService.login();
  }

  getPosts(uid) {
    this.posts = [
      {
        title: "Title1",
        imgURL:
          "https://angular.io/assets/images/logos/angular/logo-nav@2x.png",
        description: "This is description of the clothes"
      },
      {
        title: "Title2",
        imgURL:
          "https://angular.io/assets/images/logos/angular/logo-nav@2x.png",
        description: "This is description of the clothes"
      },
      {
        title: "Title3",
        imgURL:
          "https://angular.io/assets/images/logos/angular/logo-nav@2x.png",
        description: "This is description of the clothes"
      }
    ];
    console.log(this.posts);
  }
}
