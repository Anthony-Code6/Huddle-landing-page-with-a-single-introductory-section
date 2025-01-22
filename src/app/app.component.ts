import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/component/app/header/header.component";
import { FooterComponent } from "./shared/component/app/footer/footer.component";
import { HomeComponent } from "./view/home/home.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Huddle';
}
