import { Component } from '@angular/core';

// 1. IMPORTE o componente do chat no topo do arquivo
// (Verifique se o caminho para o componente está correto)
import { ChatGeminiComponent } from '../../components/chat-gemini/chat-gemini';

@Component({
  selector: 'app-home',
  standalone: true,
  // 2. ADICIONE o componente na lista de imports aqui
  imports: [ChatGeminiComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] // ou styleUrl
})
export class HomeComponent {
  // O resto do seu código do componente continua aqui
}