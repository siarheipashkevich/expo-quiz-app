import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '.';

const globalSelector = (state: RootState) => state.global;

export const selectQuestions = createSelector(globalSelector, (state) => state.questions);
export const selectAnsweredQuestions = createSelector(globalSelector, (state) => state.answeredQuestions);
export const selectActiveQuiz = createSelector(globalSelector, (state) => state.activeQuiz);
