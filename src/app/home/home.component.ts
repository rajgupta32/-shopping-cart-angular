import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { categoryCard } from '../model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public isMobile: boolean = false;
  public categoryList: categoryCard[] = [];
  public images: any[] = [];

  constructor(config: NgbCarouselConfig, private httpClient: HttpClient) {
    config.interval = 2000;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.isMobile = window.screen.width <=700 ? true : false;

    this.categoryList = [
      {
        title: "Fruits & Vegetables", 
        desc: "A variety of fresh fruits and vegetables.",
        buttonTxt: "Explore fruit-and-veg",
        imageUrl: "/assets/images/Fruits-and-Vegetables.jpg"
      },
      {
        title: "Bakery Cakes and Dairy",
        desc: "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
        buttonTxt: "Explore bakery-cakes-dairy",
        imageUrl: "/assets/images/Breads.jpg"
      },
      {
        title: "Beverages",
        desc: "Our beverage department will ensure your fridge is always fully stocked. Shop for sode, juice, beer and more.",
        buttonTxt: "Explore beverages",
        imageUrl: "/assets/images/Beverages.jpg"
      }
    ];

    this.images = this.categoryList.map((n) => n.imageUrl);
    // this.fetchData();
  }

  fetchData(){
    this.httpClient.get("/api/banners/index.get.json").subscribe(response => {
      console.log(response);
    })
  }

}
