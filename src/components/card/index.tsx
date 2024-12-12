import { memo, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

import styles from './styles';

const CARD_BORDER_COLORS = {
  basic: '#7BBBBA',
  success: '#5DBE7C',
  danger: '#FF898A',
};

type CardProps = Pick<ViewProps, 'style'> & {
  status?: 'basic' | 'success' | 'danger';
  children: ReactNode;
};

function Card({ style, status = 'basic', children }: CardProps) {
  return (
    <View style={[styles.container, { borderColor: CARD_BORDER_COLORS[status] }, style]}>
      {children}
    </View>
  );
}

export default memo(Card);
