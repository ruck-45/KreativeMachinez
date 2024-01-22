export type questionPattern = {
  question: string;
  answer: {
    data: {
      main: string;
      points: never[] | string[];
    };
    bullet: boolean;
  }[];
}[];

export type blogsType = {
  blogId: string;
  created_at: Date;
  image: string;
  summary: string;
  title: string;
}[];