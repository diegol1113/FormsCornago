import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formularioUsuario: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { 
    this.formularioUsuario = fb.group({
      correo: new FormControl('', [Validators.pattern('^[0-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
      pass: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^.*[A-Z]+.*$')]),
    });
  }

  validacion(value: string, validacion: string){
    return this.formularioUsuario.get(value)?.touched && this.formularioUsuario.get(value)?.errors?.[validacion];

  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    this.formularioUsuario.addControl('control1', new FormControl('', []));
  }

}
