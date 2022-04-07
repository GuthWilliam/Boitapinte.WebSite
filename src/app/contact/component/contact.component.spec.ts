import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MailingService } from '../mailing.service';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  const fakeMailingService = jasmine.createSpyObj<MailingService>('MailingService', ['mail']);
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {

    TestBed.configureTestingModule({
      imports: [NgbAlertModule, ReactiveFormsModule, HttpClientModule],
      providers: [
        { provide: MailingService, useValue: fakeMailingService }
      ]
    });

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

  
  it('should call the mail method on submit', () => {
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
