import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeMathijsPage } from './home-mathijs.page';

describe('HomeMathijsPage', () => {
  let component: HomeMathijsPage;
  let fixture: ComponentFixture<HomeMathijsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMathijsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMathijsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
