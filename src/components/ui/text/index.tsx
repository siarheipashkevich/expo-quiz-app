import { memo } from 'react';
import { Text as LibText, TextProps } from 'react-native';

import styles from './styles';

function Text({ children, style }: TextProps) {
  return (
    <LibText style={[styles.container, style]}>{children}</LibText>
  );
}

export default memo(Text);
