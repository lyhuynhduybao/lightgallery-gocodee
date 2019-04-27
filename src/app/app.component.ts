import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images: [
    {
      image: 'assets/img/japan_togakushi_lake_mountains_trees_autumn_112493_3840x2160.jpg',
      thumbnail: 'assets/img/japan_togakushi_lake_mountains_trees_autumn_112493_3840x2160.jpg'
    },
    {
      image: 'assets/img/jotunheimen-national-park-mountain-range-norway-4k-wallpaper.jpg',
      thumbnail: 'assets/img/jotunheimen-national-park-mountain-range-norway-4k-wallpaper.jpg'
    },
    {
      image: 'assets/img/katana-samurai-sword-uhd-4k-wallpaper.jpg',
      thumbnail: 'assets/img/katana-samurai-sword-uhd-4k-wallpaper.jpg' 
    }
  ];
}
