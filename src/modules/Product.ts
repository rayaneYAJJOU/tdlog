export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    thumbnail: string;
    images: string[];
  
    constructor(data: any) {
      this.id = data.id;
      this.title = data.title;
      this.description = data.description;
      this.category = data.category;
      this.price = data.price;
      this.discountPercentage = data.discountPercentage;
      this.rating = data.rating;
      this.stock = data.stock;
      this.tags = data.tags;
      this.brand = data.brand;
      this.sku = data.sku;
      this.weight = data.weight;
      this.dimensions = data.dimensions;
      this.warrantyInformation = data.warrantyInformation;
      this.shippingInformation = data.shippingInformation;
      this.availabilityStatus = data.availabilityStatus;
      this.reviews = data.reviews.map((review: any) => new Review(review));
      this.returnPolicy = data.returnPolicy;
      this.minimumOrderQuantity = data.minimumOrderQuantity;
      this.meta = new Meta(data.meta);
      this.thumbnail = data.thumbnail;
      this.images = data.images;
    }
  }
  
  class Dimensions {
    width: number;
    height: number;
    depth: number;
  
    constructor(data: any) {
      this.width = data.width;
      this.height = data.height;
      this.depth = data.depth;
    }
  }
  
  class Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  
    constructor(data: any) {
      this.rating = data.rating;
      this.comment = data.comment;
      this.date = data.date;
      this.reviewerName = data.reviewerName;
      this.reviewerEmail = data.reviewerEmail;
    }
  }
  
  class Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  
    constructor(data: any) {
      this.createdAt = data.createdAt;
      this.updatedAt = data.updatedAt;
      this.barcode = data.barcode;
      this.qrCode = data.qrCode;
    }
  }
  