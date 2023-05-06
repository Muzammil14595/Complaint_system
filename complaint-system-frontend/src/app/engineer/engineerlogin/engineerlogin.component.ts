import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Engineer } from 'src/app/model/engineer.model';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-engineerlogin',
  templateUrl: './engineerlogin.component.html',
  styleUrls: ['./engineerlogin.component.css']
})
export class EngineerloginComponent {
  engineer: Engineer = new Engineer();

  constructor(private service: EngineerService, private router: Router) { }

  onSubmit() {
    if (this.engineer.email == "engineer1@gmail.com") {
      this.service.login(this.engineer).subscribe(
        resp => {
          this.router.navigate(['engineerA']);
        },
        error => (console.log(error), alert("engineer Not Found")));
    }
    else if (this.engineer.email == "engineer2@gmail.com") {
      this.service.login(this.engineer).subscribe(
        resp => {
          this.router.navigate(['engineerB']);
        },
        error => (console.log(error), alert("engineer Not Found")));
    }
    else if (this.engineer.email == "engineer3@gmail.com") {
      this.service.login(this.engineer).subscribe(
        resp => {
          this.router.navigate(['engineerC']);
        },
        error => (console.log(error), alert("engineer Not Found")));
    }
    else if (this.engineer.email == "engineer4@gmail.com") {
      this.service.login(this.engineer).subscribe(
        resp => {
          this.router.navigate(['engineerrD']);
    },
        error => (console.log(error), alert("engineer Not Found")));
    }
    else if (this.engineer.email == "engineer5@gmail.com") {
      this.service.login(this.engineer).subscribe(
        resp => {
          this.router.navigate(['engineerE']);
        },
        error => (console.log(error), alert("engineer Not Found")));
    }
    else if (this.engineer.email == "engineer6@gmail.com") {
      this.service.login(this.engineer).subscribe(
        resp => {
          this.router.navigate(['engineerF']);
        },
        error => (console.log(error), alert("engineer Not Found")));
    }
    else if (this.engineer.email == "engineer7@gmail.com") {
      this.service.login(this.engineer).subscribe(
        resp => {
          this.router.navigate(['engineerG']);
        },
        error => (console.log(error), alert("engineer Not Found")));
    }
    else if (this.engineer.email == "engineer8@gmail.com") {
      this.service.login(this.engineer).subscribe(
        resp => {
          this.router.navigate(['engineerH']);
        },
        error => (console.log(error), alert("engineer Not Found")));
    }
    else if (this.engineer.email == "engineer9@gmail.com") {
      this.service.login(this.engineer).subscribe(
        resp => {
          this.router.navigate(['engineerI']);
        },
        error => (console.log(error), alert("engineer Not Found")));
    }
    else if (this.engineer.email == "engineer10@gmail.com") {
      this.service.login(this.engineer).subscribe(
        resp => {
          this.router.navigate(['engineerJ']);
        },
        error => (console.log(error), alert("engineer Not Found")));
    }
  }
}
