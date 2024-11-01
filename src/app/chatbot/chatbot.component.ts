import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, AfterViewChecked, ElementRef, ViewChild, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements AfterViewChecked {
  @Input() language!: string; // obtenu de app.component.ts
  isOpen = false;
  userInput = '';
  messages: { text: string, sender: 'user' | 'bot', liked?: boolean, disliked?: boolean }[] = [];
  showSuggestions = true;
  suggestions: string[] = [];

  constructor(private http: HttpClient, private translate: TranslateService) {}
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  toggleChatbot() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.messages.length === 0) {
      this.translate.get('CHATBOT.1ERMESS').subscribe((res: string) => {
        this.messages.push({ text: res, sender: 'bot' });
      });
      this.loadTranslations();
    }
  }

  loadTranslations() {
    this.translate.get(['CHATBOT.SUGGEST1', 'CHATBOT.SUGGEST2', 'CHATBOT.SUGGEST3']).subscribe((translations: any) => {
      this.suggestions = [
        translations['CHATBOT.SUGGEST1'],
        translations['CHATBOT.SUGGEST2'],
        translations['CHATBOT.SUGGEST3']
      ];
    });
  }

  closeChatbot(event: Event) {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan truyền lên phần tử cha
    this.isOpen = false;
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, sender: 'user' });
      this.getBotResponse(this.userInput);
      this.userInput = '';
    }
  }

  getBotResponse(userMessage: string) {
    const payload = {
      message: userMessage,
      language: this.language
    };
    this.http.post<{ text: string }[]>('http://localhost:5005/webhooks/rest/webhook', payload)
      .subscribe(response => {
        if (response && response.length > 0) {
          this.messages.push({ text: response[0].text, sender: 'bot' });
        }
      });
  }

  selectSuggestion(suggestion: string) {
    this.messages.push({ text: suggestion, sender: 'user' });
    this.showSuggestions = false;
    this.getBotResponse(suggestion);
  }

  likeMessage(message: { text: string, sender: 'user' | 'bot', liked?: boolean, disliked?: boolean }) {
    message.liked = !message.liked;
    if (message.liked) {
      message.liked = true;
    }
    console.log('Liked message:', message);
  }

  dislikeMessage(message: { text: string, sender: 'user' | 'bot', liked?: boolean, disliked?: boolean }) {
    message.disliked = !message.disliked;
    if (message.disliked) {
      message.disliked = true;
    }
    console.log('Disliked message:', message);
    if (message.disliked) {
      this.sendDislikeToBackend(message);
    }
  }

  sendDislikeToBackend(message: { text: string, sender: 'user' | 'bot' }) {
    const botMessageIndex = this.messages.indexOf(message);
    const userMessage = botMessageIndex > 0 ? this.messages[botMessageIndex - 1].text : '';
    const payload = {
      botMessage: message.text,
      userMessage: userMessage,
      language: this.language,
      feedback: 'dislike'
    };
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.authToken}`
    });
    const apiUrl = `${environment.apiLinkLocal}feedback`;
    this.http.post(apiUrl, payload, { headers: headers })
      .subscribe(response => {
        console.log('Feedback sent to backend:', response);
      });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
