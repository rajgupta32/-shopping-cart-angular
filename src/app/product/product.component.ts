import { Component, OnInit } from '@angular/core';
import { cloneDeep } from "lodash";
import { cartItem } from '../model/cartItem';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  public categoryList: any[] = [];
  public productList: any[] = [];
  public filteredProductList: any[] = [];
  public selectedCategory: any = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.categoryList = [
      "Fruits & Vegetables",
      "Bakery Cakes and Dairy",
      "Beverages",
      "Beauty and Hygiene",
      "Baby Care"
    ];
    this.selectedCategory = this.categoryList[0];
    /* #region Final product list */
    this.productList = [
      {
        title: "Fresho Kiwi - Green, 3 pcs",
        imageUrl: "",
        desc: "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny edible black seeds",
        MRP: 87,
        category: "Fruits & Vegetables"
      },
      {
        title: "Apple - Washington, Regular, 4 pcs",
        imageUrl: "",
        desc: "The bright red color coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural",
        MRP: 187,
        category: "Fruits & Vegetables"
      },
      {
        title: "Fresho Pomegrante Peeled, 500gm",
        imageUrl: "",
        desc: "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divide into compartments by thin white",
        MRP: 88,
        category: "Fruits & Vegetables"
      },
      {
        title: "Capsicum - Green, 1kg",
        imageUrl: "",
        desc: "Leaving a moderately pungent tast on the tongue. Green capsicums, also known as green peppers are bell shaped. medium-sized fruit pods.",
        MRP: 137,
        category: "Fruits & Vegetables"
      },
      {
        title: "Tomato - Local Organically Grown, 500gm",
        imageUrl: "",
        desc: "Fresho brings to you an exquisite range of locally grown oraganic tomatoes, which are now available at bigbasket. These oraganic tomatoes",
        MRP: 12,
        category: "Fruits & Vegetables"
      },
      {
        title: "Sandwich Bread - White, Chemical Free, 400gm",
        imageUrl: "",
        desc: "Freshly baked bread is one of lifes greatest simple pleasures and at BigBasket we decided to give you just that. We start baking our breads once",
        MRP: 32,
        category: "Bakery Cakes and Dairy"
      },
      {
        title: "Organic Fresh Paneer, 200gm",
        imageUrl: "",
        desc: "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we deFresho Organic Milk is sourced from farms that have been",
        MRP: 98,
        category: "Bakery Cakes and Dairy"
      },
      {
        title: "Epigamia Greek Yogurt - Blueberry, 90 gm Cup",
        imageUrl: "",
        desc: "Epigama means in Ancient Greek meant a way to Formalize the relationship between different nations. Epigamia greek yogurt is one",
        MRP: 40,
        category: "Bakery Cakes and Dairy"
      },
      {
        title: "Epigamia Greek Yogurt - Strawberry, 90 gm",
        imageUrl: "",
        desc: "Low Fat and High protien delicious and thick Greek Yogurt",
        MRP: 40,
        category: "Bakery Cakes and Dairy"
      },
      {
        title: "Tata Tea Gold Leaf Tea, 500 gm",
        imageUrl: "",
        desc: "Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15% long leaf.",
        MRP: 165,
        category: "Beverages"
      },
      {
        title: "Red Label Tea, 500gm Carton",
        imageUrl: "",
        desc: "Brooke Bond Red Label is one of Indias largest selling packaged tea brands. Brooke Bond Red Label Tea is a blend CTC tea with best quality",
        MRP: 205,
        category: "Beverages"
      },
      {
        title: "Bournvita Pro-Health Drink - Chocolate, 2x750gm",
        imageUrl: "",
        desc: "Cadbury Bournvita is a delicious chocolate health drink which is enriched with Vitamin(D,B2,B9,B12). It combines the great taste of",
        MRP: 572,
        category: "Beverages"
      },
      {
        title: "Coca Cola Soft Drink, 2x1.75L",
        imageUrl: "",
        desc: "Cadbury Bournvita is a delicious chocolate health drink which is enriched with Vitamin (D,B2,B9,B12). It combines the great taste of",
        MRP: 150,
        category: "Beverages"
      },
      {
        title: "Listerine Mouthwash - Cool Mint, 250 ml",
        imageUrl: "",
        desc: "Listerine Cool mint Antibacterial Mouthwash is rapid & easy to use, a 30 second 'slosh' with Listernie after brushing and flossing reaches parts",
        MRP: 109,
        category: "Beauty and Hygiene"
      },
      {
        title: "TRESemme Shampoo - Keratin Smooth with Argan Oil, 580 ml",
        imageUrl: "",
        desc: "For the first time, at TRESemme. Our Professional combines luxurious infredients to give you gorgeously smoother shiny hair everyday.",
        MRP: 410,
        category: "Beauty and Hygiene"
      },
      {
        title: "Dove Intense Repair Shampoo 650ml + Bathing Bar Soap Cream",
        imageUrl: "",
        desc: "Dove Cream Beauty Bar contains a gentle cleansing formula with Doves signature 1/4 moisturizing cream to give you softer, smoother and more",
        MRP: 622,
        category: "Beauty and Hygiene"
      },
      {
        title: "Premier Facial Tissue - Special, 400 pcs",
        imageUrl: "",
        desc: "Let your beautiful face stay clean Here Premier Special Fae Tissues are available, mostly prepared targeting to care for your face which",
        MRP: 270,
        category: "Beauty and Hygiene"
      },
      {
        title: "Close Up Ever Fresh Red Hot Gel Toothpaste, 150 gm",
        imageUrl: "",
        desc: "Closeup's unique Active Zinc Mothwash not only cleans deep corners of your mouth of residual germs it also gives you upto 12 Hours",
        MRP: 82,
        category: "Beauty and Hygiene"
      },
      {
        title: "Pampers Diapers Pants - Large Size, Monthly Box Pack, New, 128's pack",
        imageUrl: "",
        desc: "Pampers dry, pants style diapers are the only pants in India with new air channels that provides your baby with breathable dryness overnight.",
        MRP: 1999,
        category: "Baby Care"
      },
      {
        title: "Mamypoko Pants Style Diapers - Large, 62 pcs",
        imageUrl: "",
        desc: "MamyPoko Pants Extra Absorb is a Pant Style diaper that can be used most comfortably for the baby at night Because of Powerful slim core",
        MRP: 930,
        category: "Baby Care"
      },
      {
        title: "Johnson & Johnson Baby skincare wipes, 20 pcs",
        imageUrl: "",
        desc: "Johnson & Johnson wipes gently cleanse and care for babys delicate skin. As mild as pure water, they can be used safely all over the body, even around",
        MRP: 70,
        category: "Baby Care"
      },
      {
        title: "Nestle Cerelac Stage - 4 Multi Grain & Fruits, 2x300 gm",
        imageUrl: "",
        desc: "Nestle Multigrain Cerelac enriched with the goodness of five fruits is a complementary food which is given to babies above the age of six",
        MRP: 478,
        category: "Baby Care"
      },
      {
        title: "Baby Dove Baby Bar - Rich Moisture, 50 gm",
        imageUrl: "",
        desc: "Gentler and more nourishing than any pther baby soap bar, Baby Dove Rich Moisture Baby Bar has a hypoallergenic and pH neutral",
        MRP: 30,
        category: "Baby Care"
      },
      {
        title: "Johnson's Active Kids Shampoo - Shiny Drops With Argan Oil, 100 ml",
        imageUrl: "",
        desc: "A hair care product range specifically for kids aged 2 years and above. This mild shiny drops shampoo formula has been developed to boost natural",
        MRP: 95,
        category: "Baby Care"
      },
      {
        title: "Baby Wipes - Cherry Blossom, 2x80 pcs",
        imageUrl: "",
        desc: "These Wipes have aloe vera as key ingredient which makes it the best choice for baby hygiene, make-up remover, sanitizing your face and",
        MRP: 300,
        category: "Baby Care"
      },
    ];
    /* #endregion */

    this.filteredProductList = cloneDeep(this.productList);
  }

  addToCart(productData: any) {
    console.log(productData);
    let cartItem: cartItem = {
      title: productData.title,
      imageUrl: productData.imageUrl,
      MRP: productData.MRP,
      quantity: 1
    };

    this.cartService.addToCart(cartItem);
  }

  filterProducts(category: string) {
    this.filteredProductList = this.productList.filter(item => item.category === category);
  }

}
