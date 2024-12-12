import { memo } from 'react';
import { ViewProps } from 'react-native';

import Card from '@/components/card';
import Text from '@/components/ui/text';

type OptionProps = Pick<ViewProps, 'style'> & {
  text: string;
};

function Option({ text }: OptionProps) {
  return (
    <Card>
      <Text>
        {text}
      </Text>
    </Card>
  );
}

export default memo(Option);
