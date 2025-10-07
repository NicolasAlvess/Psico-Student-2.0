import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGemini } from './chat-gemini';

describe('ChatGemini', () => {
  let component: ChatGemini;
  let fixture: ComponentFixture<ChatGemini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatGemini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatGemini);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
