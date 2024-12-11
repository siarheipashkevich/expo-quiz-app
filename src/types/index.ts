export interface Question {
  id: number;
  question: QuestionItem[];
  answer: QuestionItem[];
  distractor1: QuestionItem[];
  distractor2: QuestionItem[];
  distractor3: QuestionItem[];
  distractor4: QuestionItem[];
}

export interface AnsweredQuestion extends Question {
  isCorrect: boolean;
}

export interface QuestionItem {
  type: 'text' | 'table';
  content: string | ([string[]])[];
}
