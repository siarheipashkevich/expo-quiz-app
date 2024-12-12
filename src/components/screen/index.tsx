import { memo } from 'react';
import { ViewProps } from 'react-native';

import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

function Screen({ style, children }: ViewProps) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
}

export default memo(Screen);
