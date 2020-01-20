import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MindfulnesscompletedPage } from './mindfulnesscompleted.page';

describe('MindfulnesscompletedPage', () => {
  let component: MindfulnesscompletedPage;
  let fixture: ComponentFixture<MindfulnesscompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindfulnesscompletedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MindfulnesscompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
