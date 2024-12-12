import { memo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import Text from '@/components/ui/text';
import styles from './styles';

type ButtonProps = Pick<TouchableOpacityProps, 'onPress' | 'style'> & {
  title: string;
};

function Button({ title, style, onPress }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default memo(Button);
