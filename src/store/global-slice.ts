import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AnsweredQuestion, Question } from '@/types';

interface GlobalSlice {
  questions: Question[];
  answeredQuestions: AnsweredQuestion[];
  activeQuiz: {
    currentQuestionIndex: number;
    questions: Question[];
  } | undefined;
}

const initialState: GlobalSlice = {
  questions: [],
  answeredQuestions: [],
  activeQuiz: undefined,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setQuestionsAction(state, { payload: questions }: PayloadAction<Question[]>) {
      state.questions = questions;
    },
    answerQuestionAction(state, { payload }: PayloadAction<{ question: Question, isCorrect: boolean }>) {
      state.answeredQuestions.push({ ...payload.question, isCorrect: payload.isCorrect });
    },
    setActiveQuizAction(state, { payload: questions }: PayloadAction<Question[]>) {
      state.activeQuiz = {
        currentQuestionIndex: 0,
        questions: questions,
      };
    },
    resetActiveQuizAction(state: GlobalSlice) {
      state.activeQuiz = undefined;
    },
  },
});

export const {
  setQuestionsAction,
  answerQuestionAction,
  setActiveQuizAction,
  resetActiveQuizAction,
} = globalSlice.actions;

export default globalSlice.reducer;
