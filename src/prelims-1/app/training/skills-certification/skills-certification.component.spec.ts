import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCertificationComponent } from './skills-certification.component';

describe('SkillsCertificationComponent', () => {
  let component: SkillsCertificationComponent;
  let fixture: ComponentFixture<SkillsCertificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsCertificationComponent]
    });
    fixture = TestBed.createComponent(SkillsCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
