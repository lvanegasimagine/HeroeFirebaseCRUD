import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.models';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel;

  constructor(private heroeServicio: HeroesService) {
    this.heroe = new HeroeModel();
  }

  ngOnInit(): void {
  }

  guardar(form: NgForm){

    if (form.invalid) {return console.log('Formulario no Valido'); }

    this.heroeServicio.agregarHeroe(this.heroe).subscribe(resp =>{
      console.log(resp);
    });
  }

  

}
