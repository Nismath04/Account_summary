import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("it account holder in required state", () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#accountHolder');
      usernameElement.value = 'Nismath';
      usernameElement.dispatchEvent(new Event('input'));

      

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const userErrorElements: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#accountHolderErrors');

        expect(userErrorElements).toBeNull();

        const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button');
        expect(btnElement.disabled).toBeFalsy();
        expect(component.myForm.get('accountHolder')?.value).toEqual('Nismath');
       
        expect(component.myForm.valid).toBeTruthy();
      })
    })
  })
});
