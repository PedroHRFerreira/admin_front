export interface IGoals {
  id: number;
  title: string;
  description: string;
  completed: boolean | number;
  image_url: string;
}

export interface IGoalsData {
  goals: IGoals[];
  status: string;
}
