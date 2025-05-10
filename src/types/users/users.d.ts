export interface IUsers {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}
export interface IUsersData {
  users: IUsers[];
  status: string;
}

export interface IUsersPost {
  name: string;
  email: string;
  password: string;
}

export interface IUsersPut {
  name: string;
  email: string;
}
