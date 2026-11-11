import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import { Card } from './card';
import { TextCard } from './text-card';

import { Spacing } from '@/utils/theme';

type HintRowProps = {
  title?: string;
  hint?: ReactNode;
};

export function HintRowCard({
  title = 'Try editing',
  hint = 'app/index.tsx'
}: HintRowProps) {
  return (
    <Card style={styles.stepRow}>
      <TextCard type="small">{title}</TextCard>
      <Card type="backgroundSelected" style={styles.codeSnippet}>
        <TextCard themeColor="textSecondary">{hint}</TextCard>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  codeSnippet: {
    borderRadius: Spacing.two,
    paddingVertical: Spacing.half,
    paddingHorizontal: Spacing.two
  }
});
