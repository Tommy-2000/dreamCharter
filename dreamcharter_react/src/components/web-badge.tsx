import { Image } from 'expo-image';
import { version } from 'expo/package.json';
import { StyleSheet, useColorScheme } from 'react-native';

import { Card } from './card';
import { TextCard } from './text-card';

import { Spacing } from '@/utils/theme';

export function WebBadge() {
  const scheme = useColorScheme();

  return (
    <Card style={styles.container}>
      <TextCard
        type="code"
        themeColor="textSecondary"
        style={styles.versionText}>
        v{version}
      </TextCard>
      <Image
        source={
          scheme === 'dark'
            ? require('@/assets/images/expo-badge-white.png')
            : require('@/assets/images/expo-badge.png')
        }
        style={styles.badgeImage}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.five,
    alignItems: 'center',
    gap: Spacing.two
  },
  versionText: {
    textAlign: 'center'
  },
  badgeImage: {
    width: 123,
    aspectRatio: 123 / 24
  }
});
