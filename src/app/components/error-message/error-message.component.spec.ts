import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
<<<<<<< HEAD
=======
import { FormControl, FormGroup } from '@angular/forms';
>>>>>>> 2b0d0d90f992092f65a6141ecd9b31e58059cdcc

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
<<<<<<< HEAD
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======

  }));
  //testes

  //mostrar mensagem de erro, quando o campo é tocado e quando há erro

  it('should show error message on field touched and error present', ()=> {
    component.field = new FormGroup({anyField : new FormControl()});
    component.field.markAsTouched();
    component.field.setErrors({anyErrors: true});
    component.error ="anyError";
    expect(component.shouldShowComponent()).toBeTruthy();
  })
  //esconder a mensagem de erro, quando o campo não for tocado

  it('should hide error message on field not touched', () =>{
    component.field = new FormGroup({anyField : new FormControl()});

    component.field.setErrors({anyErrors: true});
    component.error ="anyError";
    expect(component.shouldShowComponent()).toBeFalsy();

  })
  //campo de texto ter sido tocado, porém não haverá nenhum erro

  it('should hide error message on field touched, but no errors', () =>{

    component.field = new FormGroup({anyField : new FormControl()});
    component.field.markAsTouched();

    component.error ="anyError";
    expect(component.shouldShowComponent()).toBeFalsy();
  })

  //erro diferente do que o componente está esperando

  it('should hide error message on field touched and has error, but it is different error', () =>{
    component.field = new FormGroup({anyField : new FormControl()});
    component.field.markAsTouched();
    component.field.setErrors({anyErrors: true});
    component.error ="anotherError";
    expect(component.shouldShowComponent()).toBeFalsy();
  })
>>>>>>> 2b0d0d90f992092f65a6141ecd9b31e58059cdcc
