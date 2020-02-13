import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   
  isCollapsed: false;
  userItems: any;
  loading = false;
  userRole: any;
  constructor(private readonly authService: AuthService,private readonly router: Router,
  private route: ActivatedRoute ){ }

  logout(){
    this.loading = true;
    this.authService.logout();
    this.router.navigateByUrl('/login')
  }

  public getFromLocalStrorage() {
    const users = JSON.parse(localStorage.getItem('currentUser'));
    console.log('============');
    console.log(users);
    return users;
    }



  ngOnInit() {
    this.userItems = this.getFromLocalStrorage();
    const name = this.userItems.name;
    console.log(name);
    this.userRole = this.userItems.user_role;
    console.log(this.userRole);
    
  }

}
