import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FormGroup } from '@angular/forms';
>>>>>>> 2b0d0d90f992092f65a6141ecd9b31e58059cdcc

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
<<<<<<< HEAD
=======
  //criação de parâmetro
  @Input () message: string;
  @Input() field: FormGroup;
  @Input() error:string;
>>>>>>> 2b0d0d90f992092f65a6141ecd9b31e58059cdcc

  constructor() { }

  ngOnInit() {}
<<<<<<< HEAD

=======
  //declarando a função
  shouldShowComponent(){
    if(this.field.touched && this.field.errors?.[this.error]){
      return true;
    }
     return false;

  }
>>>>>>> 2b0d0d90f992092f65a6141ecd9b31e58059cdcc
}
