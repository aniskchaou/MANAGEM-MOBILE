import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyProjectsPage } from './my-projects.page';

describe('MyProjectsPage', () => {
  let component: MyProjectsPage;
  let fixture: ComponentFixture<MyProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
