import { Text, View } from 'react-native';
import 'react-native-reanimated';
import { useRouter } from 'expo-router';

import { useAppSelector } from '@/store/hooks';
import { selectActiveQuiz } from '@/store/selctors';
import Screen from '@/components/screen';
import Question from '@/components/question';
import Button from '@/components/ui/button';

export default function QuestionPage() {
  const router = useRouter();
  const activeQuiz = useAppSelector(selectActiveQuiz);

  if (!activeQuiz) {
    return (
      <View><Text>Please do it correctly.</Text></View>
    );
  }

  return (
    <Screen style={{ padding: 0 }}>
      <Question question={activeQuiz.questions[0]} />
      <Button
        style={{ alignSelf: 'flex-end', marginTop: 20, marginHorizontal: 20 }}
        title="Continue"
        onPress={() => {
          router.replace('/result');
        }}
      />
    </Screen>
  );
}
