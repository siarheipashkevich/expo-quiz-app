import 'react-native-reanimated';
import { useRouter } from 'expo-router';

import Stats from '@/components/stats';
import Screen from '@/components/screen';
import Button from '@/components/ui/button';

export default function ResultPage() {
  const router = useRouter();

  return (
    <Screen>
      <Stats header="Quiz stats:" correctAnswersQty={1} incorrectAnswersQty={2} />
      <Stats
        style={{ marginTop: 20 }}
        header="Overall stats:"
        correctAnswersQty={0}
        incorrectAnswersQty={0}
      />
      <Button
        style={{ marginTop: 20 }}
        title="Go home"
        onPress={() => {
          router.back();
        }}
      />
    </Screen>
  );
}
