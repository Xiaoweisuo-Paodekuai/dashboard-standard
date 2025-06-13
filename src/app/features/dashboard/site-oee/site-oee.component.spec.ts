import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteOeeComponent } from './site-oee.component';

describe('SiteOeeComponent', () => {
  let component: SiteOeeComponent;
  let fixture: ComponentFixture<SiteOeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteOeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteOeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
