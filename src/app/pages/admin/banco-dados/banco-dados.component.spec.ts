import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoDadosComponent } from './banco-dados.component';

describe('BancoDadosComponent', () => {
  let component: BancoDadosComponent;
  let fixture: ComponentFixture<BancoDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
