export type Pizza = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export interface PizzaSliceState {
  items: Pizza[];
  status: 'loading' | 'success' | 'error';
}

export type SearchPizzaParams = {
  search: string;
  category: string;
  sortBy: string;
  order: string;
  currentPage: string;
};
