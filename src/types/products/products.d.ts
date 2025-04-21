export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export interface IProductPost {
  name: string;
  description: string;
  price: string | number;
  image: string;
  quantity: number;
}

export interface IFilter {
  name?: string;
  price?: string;
  quantity?: string;
}

export interface IProductsData {
  products: IProduct[];
  status: string;
}
