import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeguroComponent } from './update-seguro.component';

describe('UpdateSeguroComponent', () => {
    let component: UpdateSeguroComponent;
    let fixture: ComponentFixture<UpdateSeguroComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ UpdateSeguroComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(UpdateSeguroComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  