import { useEffect } from 'react';
import { useRouter } from 'expo-router';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectAnsweredQuestions, selectQuestions } from '@/store/selctors';
import { setActiveQuizAction, setQuestionsAction } from '@/store/global-slice';
import { QuestionService } from '@/services/question-service';
import Stats from '@/components/stats';
import Screen from '@/components/screen';
import Button from '@/components/ui/button';

import data from '@/assets/data.json';

export default function IndexPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const questions = useAppSelector(selectQuestions);
  const answeredQuestions = useAppSelector(selectAnsweredQuestions);

  useEffect(() => {
    // @ts-ignore
    dispatch(setQuestionsAction(data.data.questions));
  }, []);

  const handleStartQuiz = () => {
    dispatch(setActiveQuizAction(QuestionService.prepareQuizQuestions(questions, answeredQuestions)));

    router.push('/question');
  };

  const handleResetProgress = () => {
    //
  };

  return (
    <Screen>
      <Stats header="Overall stats:" correctAnswersQty={0} incorrectAnswersQty={0} />
      <Button title="Start quiz" style={{ marginTop: 20 }} onPress={handleStartQuiz} />
      <Button title="Reset progress" style={{ marginTop: 20 }} onPress={handleResetProgress} />
    </Screen>
  );
}
