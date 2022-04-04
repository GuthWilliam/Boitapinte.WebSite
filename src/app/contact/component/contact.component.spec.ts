import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should call the register method on submit', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    spyOn(fixture.componentInstance, 'mail');

    fixture.detectChanges();
    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', {});

    expect(fixture.componentInstance.mail).toHaveBeenCalled();
    expect((fixture.componentInstance.mail as jasmine.Spy).calls.count())
      .withContext('Looks like you are calling register several times!')
      .toBe(1);
  });

});
