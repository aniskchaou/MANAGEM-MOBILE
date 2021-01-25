import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyNotesPage } from './my-notes.page';

describe('MyNotesPage', () => {
  let component: MyNotesPage;
  let fixture: ComponentFixture<MyNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
