import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-view',
  templateUrl: './language-view.component.html',
  styles: [
  ]
})
export class LanguageViewComponent {
  @Input() language: string;
  @Input() subText: string;
  @Input() rating: number;
}
