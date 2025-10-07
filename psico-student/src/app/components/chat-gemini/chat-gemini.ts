import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@Component({
  selector: 'app-chat-gemini',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione o FormsModule aqui
  templateUrl: './chat-gemini.html',
  styleUrls: ['./chat-gemini.css']
})
export class ChatGeminiComponent {
  question: string = '';
  answer: string = '';
  error: string = '';
  isLoading: boolean = false;

  // O URL do seu servidor backend
  private apiUrl = 'http://localhost:3000/api/ask';

  constructor(private http: HttpClient) { }

  askQuestion() {
    if (!this.question.trim()) return;

    this.isLoading = true;
    this.answer = '';
    this.error = '';

    this.http.post<{ answer: string }>(this.apiUrl, { question: this.question })
      .subscribe({
        next: (res) => {
          this.answer = res.answer;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Desculpe, não consegui processar a resposta. Tente novamente.';
          this.isLoading = false;
          console.error(err);
        }
      });
  }
}