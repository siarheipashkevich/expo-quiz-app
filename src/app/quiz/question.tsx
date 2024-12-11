import { Text, View } from 'react-native';
import 'react-native-reanimated';
import { Link } from 'expo-router';

import { useAppSelector } from '@/store/hooks';
import { selectActiveQuiz } from '@/store/selctors';

export default function QuestionPage() {
  const activeQuiz = useAppSelector(selectActiveQuiz);

  if (!activeQuiz) {
    return (
      <View><Text>Please do it correctly.</Text></View>
    );
  }

  return (
    <View>
      <Link href="/">close icon</Link>
    </View>
  );
}
