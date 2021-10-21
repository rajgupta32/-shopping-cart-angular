import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { cartItem } from '../model/cartItem';
import { CartService } from '../service/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {
  public categoryList: any[] = [];
  public productList: any[] = [];
  public filteredProductList: any[] = [];

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.categoryList = [
      {
        id: '5b6899953d1a866534f516e2',
        name: 'Fruits & Vegetables',
      },
      {
        id: '5b6899123d1a866534f516de',
        name: 'Bakery Cakes and Dairy',
      },
      {
        id: '5b675e5e5936635728f9fc30',
        name: 'Beverages',
      },
      {
        id: '5b68994e3d1a866534f516df',
        name: 'Beauty and Hygiene',
      },
      {
        id: '5b6899683d1a866534f516e0',
        name: 'Baby Care',
      },
    ];
    /* #region Final product list */
    this.productList = [
      {
        title: 'Fresho Kiwi - Green, 3 pcs',
        imageUrl: '/assets/images/products/fruit-n-veg/kiwi-green.jpg',
        desc: 'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
        MRP: 87,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-kiwi-3',
        id: '5b6c6a7f01a7c38429530883',
      },
      {
        title: 'Apple - Washington, Regular, 4 pcs',
        imageUrl: '/assets/images/products/fruit-n-veg/apple.jpg',
        desc: 'The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.',
        MRP: 187,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-apple-4',
        id: '5b6c6aeb01a7c38429530884',
      },
      {
        title: 'Fresho Pomegrante Peeled, 500 gm ',
        imageUrl: '/assets/images/products/fruit-n-veg/pomegrante.jpg',
        desc: 'Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.',
        MRP: 88,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-pomegranate-500',
        id: '5b6c6b7001a7c38429530885',
      },
      {
        title: 'Capsicum - Green, 1 kg',
        imageUrl: '/assets/images/products/fruit-n-veg/capsicum-green.jpg',
        desc: 'Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.',
        MRP: 137,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-capsicum-1',
        id: '5b6c6bdc01a7c38429530886',
      },
      {
        title: 'Tomato - Local, Organically Grown, 500 gm',
        imageUrl: '/assets/images/products/fruit-n-veg/capsicum-green.jpg',
        desc: 'Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes are free from harmful pesticides and insecticides.',
        MRP: 12,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-tomatoes-500',
        id: '5b6c6c1801a7c38429530887',
      },
      {
        title: 'Sandwich Bread - White, Chemical Free, 400 gm',
        imageUrl: '/assets/images/products/bakery-cakes-dairy/bread.jpg',
        desc: 'Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available.',
        MRP: 32,
        stock: 50,
        category: '5b6899123d1a866534f516de',
        sku: 'bcd-bread-400',
        id: '5b6c6d3201a7c38429530888',
      },
      {
        title: 'Organic Fresh Paneer, 200 gm ',
        imageUrl: '/assets/images/products/bakery-cakes-dairy/paneer.jpg',
        desc: 'Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we deFresho Organic Milk is sourced from farms that have been certified organic for over 8 years. All feed is naturally grown with no pesticides or fertilizers.',
        MRP: 98,
        stock: 50,
        category: '5b6899123d1a866534f516de',
        sku: 'bcd-paneer-200',
        id: '5b6c6d6201a7c38429530889',
      },
      {
        title: 'Epigamia Greek Yogurt - Blueberry, 90 gm Cup',
        imageUrl: '/assets/images/products/bakery-cakes-dairy/yogurt-blue.jpg',
        desc: 'Epigama means in Ancient Greek meant a way to Formalize the relationship between different nations. Epigamia greek yogurt is one of the most authentic yoghurts which advocates a healthy lifestyle with delicious taste. An excellent source of protein without the added fat.',
        MRP: 40,
        stock: 50,
        category: '5b6899123d1a866534f516de',
        sku: 'bcd-yogurt-blue',
        id: '5b6c6d9e01a7c3842953088a',
      },
      {
        title: 'Epigamia Greek Yogurt - Strawberry, 90 gm',
        imageUrl: '/assets/images/products/bakery-cakes-dairy/yogurt-red.jpg',
        desc: 'Low Fat and High protein delicious and thick Greek Yogurt.',
        MRP: 40,
        stock: 50,
        category: '5b6899123d1a866534f516de',
        sku: 'bcd-yogurt-red',
        id: '5b6c6dd701a7c3842953088b',
      },
      {
        title: 'Tata Tea Gold Leaf Tea, 500 gm',
        imageUrl: '/assets/images/products/beverages/tata-tea.jpg',
        desc: 'Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.',
        MRP: 165,
        stock: 50,
        category: '5b675e5e5936635728f9fc30',
        sku: 'bev-tata-tea-500',
        id: '5b6c6f4a01a7c3842953088c',
      },
      {
        title: 'Red Label Tea, 500 gm Carton',
        imageUrl: '/assets/images/products/beverages/red-label.jpg',
        desc: 'Brooke Bond Red Label is one of Indias largest selling packaged tea brands. Brooke Bond Red Label Tea is a blend CTC tea with best quality leaves.',
        MRP: 205,
        stock: 50,
        category: '5b675e5e5936635728f9fc30',
        sku: 'bev-red-label-500',
        id: '5b6c6f8301a7c3842953088d',
      },
      {
        title: 'Bournvita Pro-Health Drink - Chocolate, 2x750 gm',
        imageUrl: '/assets/images/products/beverages/bournvita.jpg',
        desc: 'Cadbury Bournvita is a delicious chocolate health drink which is enriched with Vitamin (D,B2,B9,B12). It combines the great taste of chocolate, and goodness of essential nutrients that aid growth and development.',
        MRP: 572,
        stock: 50,
        category: '5b675e5e5936635728f9fc30',
        sku: 'bev-bournvita-750',
        id: '5b6c6fbf01a7c3842953088e',
      },
      {
        title: 'Coca Cola Soft Drink, 2x1.75 L',
        imageUrl: '/assets/images/products/beverages/bournvita.jpg',
        desc: 'Cadbury Bournvita is a delicious chocolate health drink which is enriched with Vitamin (D,B2,B9,B12). It combines the great taste of chocolate, and goodness of essential nutrients that aid growth and development.',
        MRP: 150,
        stock: 50,
        category: '5b675e5e5936635728f9fc30',
        sku: 'coke-175',
        id: '5b6c6fed01a7c3842953088f',
      },
      {
        title: 'Listerine Mouthwash - Cool Mint, 250 ml',
        imageUrl: '/assets/images/products/beauty-hygiene/listerine.jpg',
        desc: 'Listerine Cool mint Antibacterial Mouthwash is rapid & easy to use, a 30 second "slosh" with Listerine after brushing and flossing reaches parts of the mouth that may be missed. Used two times daily, Listerine provides 24-hour defence against plaque and lasting bright breath assurance.',
        MRP: 109,
        stock: 50,
        category: '5b68994e3d1a866534f516df',
        sku: 'bh-listerine-250',
        id: '5b6c715f01a7c38429530890',
      },
      {
        title: 'TRESemme Shampoo - Keratin Smooth With Argan Oil, 580 ml ',
        imageUrl: '/assets/images/products/beauty-hygiene/shampoo.jpg',
        desc: 'For the first time, at TRESemme , Our Professional combines luxurious ingredients to give you gorgeously smoother shiny hair every day , infused with keratin protein and lightweight argan oil , our advanced keratin smooth system gently nourishes hair and controls frizz for up to 3 days.',
        MRP: 410,
        stock: 50,
        category: '5b68994e3d1a866534f516df',
        sku: 'bh-tresemme-580',
        id: '5b6c71a101a7c38429530891',
      },
      {
        title:
          'Dove Intense Repair Shampoo 650ml + Bathing Bar Soap Cream Beauty 100G Pack of 3',
        imageUrl: '/assets/images/products/beauty-hygiene/dove.jpg',
        desc: 'Dove Cream Beauty Bar combines a gentle cleansing formula with Doves signature 1/4 moisturizing cream to give you softer, smoother and more glowing skin.',
        MRP: 622,
        stock: 50,
        category: '5b68994e3d1a866534f516df',
        sku: 'bh-dove-combo',
        id: '5b6c71e601a7c38429530892',
      },
      {
        title: 'Premier Facial Tissue - Special, 400 pcs',
        imageUrl: '/assets/images/products/beauty-hygiene/tissues.jpg',
        desc: 'Let your beautiful face stay clean Here Premier Special Face Tissues are available, mostly prepared targeting to care for your face which has spongy and delicate skin.',
        MRP: 270,
        stock: 50,
        category: '5b68994e3d1a866534f516df',
        sku: 'bh-tissue-400',
        id: '5b6c721d01a7c38429530893',
      },
      {
        title: 'Close Up Ever Fresh Red Hot Gel Toothpaste, 150 gm',
        imageUrl: '/assets/images/products/beauty-hygiene/closeup.jpg',
        desc: " Closeup's unique Active Zinc Mouthwash not only cleans deep corners of your mouth of residual germs it also gives you upto 12 Hours Fresh Breath.",
        MRP: 82,
        stock: 50,
        category: '5b68994e3d1a866534f516df',
        sku: 'bh-closeup-150',
        id: '5b6c727801a7c38429530894',
      },
      {
        title:
          "Pampers Diapers Pants - Large Size, Monthly Box Pack, New, 128's pack",
        imageUrl: '/assets/images/products/baby/pampers.jpg',
        desc: 'Pampers dry, pants style diapers are the only pants in India with new air channels that provides your baby with breathable dryness overnight.',
        MRP: 1999,
        stock: 50,
        category: '5b6899683d1a866534f516e0',
        sku: 'baby-pamper-128',
        id: '5b6c746801a7c38429530895',
      },
      {
        title: 'Mamypoko Pants Style Diapers - Large, 62 pcs',
        imageUrl: '/assets/images/products/baby/mamy.jpg',
        desc: 'MamyPoko Pants Extra Absorb is a Pant Style diaper that can be used most comfortably for the baby at night Because of Powerful slim core that can absorb up to 12 hours, it prevents leakage till morning.',
        MRP: 930,
        stock: 50,
        category: '5b6899683d1a866534f516e0',
        sku: 'baby-mamy-62',
        id: '5b6c74d101a7c38429530896',
      },
      {
        title: 'Johnson & Johnson Baby skincare wipes, 20 pcs',
        imageUrl: '/assets/images/products/baby/wipes.jpg',
        desc: 'Johnsons Baby wipes gently cleanse and care for babys delicate skin. As mild as pure water, they can be used safely all over the body, even around eyes.',
        MRP: 70,
        stock: 50,
        category: '5b6899683d1a866534f516e0',
        sku: 'baby-wipes-20',
        id: '5b6c750701a7c38429530897',
      },
      {
        title: 'Nestle Cerelac Stage - 4 Multi Grain & Fruits, 2x300 gm',
        imageUrl: '/assets/images/products/baby/cerelac.jpg',
        desc: 'Nestle Multigrain Cerelac enriched with the goodness of five fruits is a complementary food which is given to babies above the age of six months.',
        MRP: 478,
        stock: 50,
        category: '5b6899683d1a866534f516e0',
        sku: 'baby-cerelac-300',
        id: '5b6c753c01a7c38429530898',
      },
      {
        title: 'Baby Dove Baby Bar - Rich Moisture, 50 gm',
        imageUrl: '/assets/images/products/baby/baby-dove.jpg',
        desc: 'Gentler and more nourishing than any other baby soap bar, Baby Dove Rich Moisture Baby Bar has a hypoallergenic and pH neutral formula thats ophthalmologist, dermatologist and pediatrician tested too.',
        MRP: 30,
        stock: 50,
        category: '5b6899683d1a866534f516e0',
        sku: 'baby-dove-50',
        id: '5b6c758301a7c38429530899',
      },
      {
        title:
          "Johnson's Active Kids Shampoo - Shiny Drops With Argan Oil, 100 ml",
        imageUrl: '/assets/images/products/baby/shampoo.jpg',
        desc: 'A hair care product range specifically for kids aged 2 years and above. This mild shiny drops shampoo formula has been developed to boost natural shine & help reduce frizz, leaving hair silky smooth and healthy looking.',
        MRP: 95,
        stock: 50,
        category: '5b6899683d1a866534f516e0',
        sku: 'baby-shampoo-100',
        id: '5b6c75e101a7c3842953089a',
      },
      {
        title: 'Baby Wipes - Cherry Blossom, 2x80 pcs',
        imageUrl: '/assets/images/products/baby/red-wipes.jpg',
        desc: 'These Wipes have aloe vera as key ingredient which makes it the best choice for baby hygiene, make-up remover, sanitizing your face and hand after a long drive, sports or any other situation where you need a quick hygiene solution.',
        MRP: 300,
        stock: 50,
        category: '5b6899683d1a866534f516e0',
        sku: 'baby-wipes-red-80',
        id: '5b6c761801a7c3842953089b',
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
      quantity: 1,
    };

    this.cartService.addToCart(cartItem);
  }

  filterProducts(categoryId: string) {
    this.filteredProductList = this.productList.filter(
      (item) => item.category === categoryId
    );
    this._router.navigate(['/product', categoryId]);
  }
}
