import { AfterViewInit, Component } from '@angular/core';
import * as Flickity from 'flickity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    var flkty = new Flickity('.carousel', {
      cellSelector: '.carousel-cell',
      setGallerySize: false,
      adaptiveHeight: true,
      cellAlign: 'left',
      wrapAround: true,
      autoPlay: 5000,
      pauseAutoPlayOnHover: false,
      draggable: false,
    });
  }
}
