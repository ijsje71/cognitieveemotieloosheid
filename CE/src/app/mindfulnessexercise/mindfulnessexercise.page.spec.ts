import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MindfulnessexercisePage } from './mindfulnessexercise.page';

describe('MindfulnessexercisePage', () => {
  let component: MindfulnessexercisePage;
  let fixture: ComponentFixture<MindfulnessexercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindfulnessexercisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MindfulnessexercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
