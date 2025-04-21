export interface IExpenses {
  id: number;
  month: string;
  expenses_current: number;
  expenses_previous: number;
  expenses_next: number;
  expenses_products: number;
  highest_spending_product: number;
  lowest_cost_product: number;
}

export interface IExpensesPost {
  month: string;
  expenses_current: number;
}

export interface IFilter {
  month?: string;
  expenses_current?: string;
  highest_spending_product?: string;
}

export interface IExpensesData {
  expenses: IExpenses[];
  status: string;
}
