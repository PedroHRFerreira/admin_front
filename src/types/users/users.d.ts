export interface IUsers {
  id: number;
  name: string;
  email: string;
}
export interface IUsersData {
  users: IUsers[];
  status: string;
}
