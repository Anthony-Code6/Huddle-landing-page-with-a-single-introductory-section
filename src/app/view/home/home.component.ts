import { Component, signal } from '@angular/core';
import { ImgComponent } from "../../components/app/img/img.component";
import { ContentComponent } from "../../components/app/content/content.component";

@Component({
  selector: 'app-home',
  imports: [ImgComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titulo = signal<string>('Build The Community')
  subtitulo = signal<string>('Your Fans Will Love')
  descripcion = signal<string>('Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.')
}
