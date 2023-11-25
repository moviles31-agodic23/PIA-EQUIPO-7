import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html',
  styleUrls: ['./foto.page.scss'],
})
export class FotoPage implements OnInit {

  showHeart: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}


//Poner en rojo el corazon de me encnata cuando se le da like
//AgregaR AuthGuard