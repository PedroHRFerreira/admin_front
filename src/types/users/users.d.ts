export interface IUsers {
  id: number;
  name: string;
  email: string;
}
export interface IUsersData {
  sales: IUsers[];
  status: string;
}
