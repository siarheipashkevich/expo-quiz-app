import { useEffect } from 'react';
import { Pressable, View, Text } from 'react-native';
import 'react-native-reanimated';
import { useRouter } from 'expo-router';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectAnsweredQuestions, selectQuestions } from '@/store/selctors';
import { setActiveQuizAction, setQuestionsAction } from '@/store/global-slice';
import { QuestionService } from '@/services/question-service';

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

    router.navigate('/quiz/question');
  };

  return (
    <View>
      <Pressable onPress={handleStartQuiz}>
        <Text>Start quiz</Text>
      </Pressable>
    </View>
  );
}
