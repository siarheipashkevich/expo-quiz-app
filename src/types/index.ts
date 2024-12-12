export interface Question {
  id: number;
  app_id: number;
  category_id: number;
  reference: string;
  question: QuestionContent[];
  answer: QuestionContent[];
  distractor1: QuestionContent[];
  distractor2: QuestionContent[];
  distractor3: QuestionContent[];
  distractor4?: QuestionContent[];
}

export interface QuestionContent {
  type: 'text' | 'table';
  content: string | string[][];
}

export interface AnsweredQuestion extends Question {
  isCorrect: boolean;
}
