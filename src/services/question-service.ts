import { MAX_QUIZ_QUESTIONS } from '@/constants';
import { AnsweredQuestion, Question } from '@/types';

export class QuestionService {
  public static prepareQuizQuestions(questions: Question[], answeredQuestions: AnsweredQuestion[]): Question[] {
    const unansweredQuestions = this.filterUnansweredQuestions(questions, answeredQuestions);
    const invalidAnsweredQuestion = questions.filter((question) => answeredQuestions.some(({ id, isCorrect }) => {
      return !isCorrect && id === question.id;
    }));

    let quizQuestions = [...unansweredQuestions, ...invalidAnsweredQuestion];

    const restQuestions = questions.filter((question) => !quizQuestions.some(({ id }) => id === question.id));

    quizQuestions = [...quizQuestions, ...restQuestions];

    quizQuestions.length = MAX_QUIZ_QUESTIONS;

    return quizQuestions;
  }

  public static filterUnansweredQuestions(questions: Question[], answeredQuestions: AnsweredQuestion[]) {
    return questions.filter((question) => !answeredQuestions.some(({ id }) => id === question.id));
  }
}
