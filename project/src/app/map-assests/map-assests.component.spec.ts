import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAssestsComponent } from './map-assests.component';

describe('MapAssestsComponent', () => {
  let component: MapAssestsComponent;
  let fixture: ComponentFixture<MapAssestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapAssestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapAssestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
