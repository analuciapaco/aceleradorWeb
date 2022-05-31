import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoBancoDadosComponent } from './configuracao-banco-dados.component';

describe('ConfiguracaoBancoDadosComponent', () => {
  let component: ConfiguracaoBancoDadosComponent;
  let fixture: ComponentFixture<ConfiguracaoBancoDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracaoBancoDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoBancoDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
