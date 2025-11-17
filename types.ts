
export interface Option {
  letter: string;
  text: string;
}

export interface Question {
  id: number;
  question: string;
  code?: string;
  options: Option[];
  answer: string;
  explanation: string;
}
