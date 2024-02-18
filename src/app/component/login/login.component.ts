import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  error: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
  }


  login() {
    if (this.authService.login(this.username.value, this.password.value)) {
      Swal.fire({
        icon:'success',
        title:'Success',
        text:'Verified',
        timer:500
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          this.router.navigate(['/']);
        }
      });

    } else {
      Swal.fire({
        icon:'error',
        title:'Hint',
        html:'Username: user<br/>Password: user'
      })
    }
  }

}
