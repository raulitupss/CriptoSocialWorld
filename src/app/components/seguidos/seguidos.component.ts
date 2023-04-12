import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguidos',
  templateUrl: './seguidos.component.html',
  styleUrls: ['./seguidos.component.scss']
})
export class SeguidosComponent {

  test:string = "Prueba"


  constructor(private router: Router) {
  }

  public prueba(){
    this.router.navigate(['/home']);
  }
}
