import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeguroComponent } from './add-seguro.component';

describe('AddSeguroComponent', () => {
    let component: AddSeguroComponent;
    let fixture: ComponentFixture<AddSeguroComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ AddSeguroComponent ]
        })
        .compileComponents();
    
        fixture = TestBed.createComponent(AddSeguroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});