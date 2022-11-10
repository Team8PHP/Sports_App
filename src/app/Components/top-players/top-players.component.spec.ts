import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlayersComponent } from './top-players.component';

describe('TopPlayersComponent', () => {
  let component: TopPlayersComponent;
  let fixture: ComponentFixture<TopPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
