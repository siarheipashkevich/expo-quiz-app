import { memo } from 'react';
import { ScrollView, View } from 'react-native';

import Text from '@/components/ui/text';
import Card from '@/components/card';
import { Question as QuestionType } from '@/types';
import Option from './option';
import styles from './styles';

type QuestionProps = {
  question: QuestionType;
};

function Question({ question }: QuestionProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.fz15}>Question id: {question.id}</Text>
      <Text style={styles.fz15}>Category id: {question.category_id}</Text>
      <Card style={styles.question}>
        <Text style={styles.questionText}>{question.question[0].content}</Text>
      </Card>
      <View style={styles.options}>
        <Option text="Change is constrained as much as possible" />
        <Option text="Deliverables contain sufficient capability to be considered complete after one iteration" />
        <Option text="Scope is determined early in the project life cycle, but time and cost are routinely modified" />
        <Option text="Scope, time, and cost are determined in th early phases of the life cycle" />
      </View>
    </ScrollView>
  );
}

export default memo(Question);
