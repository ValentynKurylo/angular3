import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  fullUser: User

  constructor(private router: Router) {
    this.fullUser = this.router.getCurrentNavigation()?.extras.state as User
    console.log(this.fullUser);
  }

  ngOnInit(): void {
  }

}
