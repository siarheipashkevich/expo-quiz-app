import { memo } from 'react';
import { View, ViewProps } from 'react-native';

import Text from '@/components/ui/text';
import styles from './styles';

type StatsProps = Pick<ViewProps, 'style'> & {
  header: string;
  correctAnswersQty: number;
  incorrectAnswersQty: number;
};

function Stats({ style, header, correctAnswersQty, incorrectAnswersQty }: StatsProps) {
  return (
    <View style={style}>
      <Text style={styles.header}>{header}</Text>
      <View style={styles.body}>
        <Text style={styles.item}>Correct: {correctAnswersQty}</Text>
        <Text style={styles.item}>Incorrect: {incorrectAnswersQty}</Text>
      </View>
    </View>
  );
}

export default memo(Stats);
