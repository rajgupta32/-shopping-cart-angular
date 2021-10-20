import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { categoryCard } from '../model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  public isMobile: boolean = false;
  public categoryList: categoryCard[] = [];
  public bannerList: any[] = [];
  public images: any[] = [];

  constructor(config: NgbCarouselConfig, private httpClient: HttpClient) {
    config.interval = 2000;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.isMobile = window.screen.width <= 700 ? true : false;

    this.bannerList = [
      {
        bannerImageUrl: '/assets/images/offers/offer1.jpg',
        bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
        isActive: true,
        order: 1,
        id: '5b6c38156cb7d770b7010ccc',
      },
      {
        bannerImageUrl: '/assets/images/offers/offer2.jpg',
        bannerImageAlt: 'Independence Day Deal - Rs120 off on surf',
        isActive: false,
        order: 2,
        id: '5b6c38336cb7d770b7010ccd',
      },
      {
        bannerImageUrl: '/assets/images/offers/offer3.jpg',
        bannerImageAlt: 'Independence Day Deal - Rs99 off on domex',
        isActive: false,
        order: 3,
        id: '5b6c38456cb7d770b7010cce',
      },
      {
        bannerImageUrl: '/assets/images/offers/offer4.jpg',
        bannerImageAlt: 'Independence Day Deal - Rs99 off on bodywash',
        isActive: false,
        order: 4,
        id: '5b6c38576cb7d770b7010ccf',
      },
      {
        bannerImageUrl: '/assets/images/offers/offer5.jpg',
        bannerImageAlt: 'Independence Day Deal - Rs70 off on tea',
        isActive: false,
        order: 5,
        id: '5b6c386b6cb7d770b7010cd0',
      },
    ];

    this.categoryList = [
      {
        title: 'Fruits & Vegetables',
        desc: 'A variety of fresh fruits and vegetables.',
        buttonTxt: 'Explore fruit-and-veg',
        imageUrl: '/assets/images/category/Fruits-and-Vegetables.jpg',
      },
      {
        title: 'Bakery Cakes and Dairy',
        desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.',
        buttonTxt: 'Explore bakery-cakes-dairy',
        imageUrl: '/assets/images/category/Breads.jpg',
      },
      {
        title: 'Beverages',
        desc: 'Our beverage department will ensure your fridge is always fully stocked. Shop for sode, juice, beer and more.',
        buttonTxt: 'Explore beverages',
        imageUrl: '/assets/images/category/Beverages.jpg',
      },
      {
        title: 'Beauty and Hygiene',
        desc: 'Buy beauty and personal care products online in India at best prices., juice, beer and more.',
        buttonTxt: 'Explore Beauty and Hygiene',
        imageUrl: '/assets/images/category/beauty.png',
      },
      {
        title: 'Baby Care',
        desc: 'Shop online for Baby Products, Diapers, Skin Care Products,etc., juice, beer and more.',
        buttonTxt: 'Explore Baby Care',
        imageUrl: '/assets/images/category/BabyCare.JPG',
      },
    ];

    this.images = this.bannerList.map((n) => n.bannerImageUrl);
    // this.fetchData();
  }

  fetchData() {
    this.httpClient.get('/api/banners/index.get.json').subscribe((response) => {
      console.log(response);
    });
  }
}
