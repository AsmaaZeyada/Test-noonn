import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore,{ Navigation, SwiperOptions } from "swiper";


SwiperCore.use([Navigation]);

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent implements OnInit {

gridConfig:SwiperOptions = {
    slidesPerView:12,
    spaceBetween:30,
    slidesPerGroup:12,
    loop:false,
    loopFillGroupWithBlank:true,
    pagination:{
      clickable: true
    },
    navigation:true,
}

  constructor() { }

  ngOnInit(): void {
  }

}
