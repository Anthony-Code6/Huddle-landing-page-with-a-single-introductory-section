import { Component, input, signal } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-content',
  imports: [ButtonComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  titulo = input<string>('')
  subtitulo = input<string>('')
  descripcion = input<string>('')
}
