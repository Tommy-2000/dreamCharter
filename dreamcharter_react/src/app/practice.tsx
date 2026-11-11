import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Platform, Pressable, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { CollapsibleCard } from '@/components/collapsible-card';
import { ExternalLink } from '@/components/external-link';
import { TextCard } from '@/components/text-card';
import { WebBadge } from '@/components/web-badge';
import { useTheme } from '@/hooks/use-theme';
import { practiceStyles } from '@/utils/styles';
import { BottomTabInset, Spacing } from '@/utils/theme';
import { FiberProvider } from 'its-fine';

export default function PracticeScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three
  };
  const theme = useTheme();

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom
    },
    web: {
      paddingTop: Spacing.six,
      paddingBottom: Spacing.four
    }
  });

  return (
    <FiberProvider>
      <ScrollView
        style={[
          practiceStyles.scrollView,
          { backgroundColor: theme.background }
        ]}
        contentInset={insets}
        contentContainerStyle={[
          practiceStyles.contentContainer,
          contentPlatformStyle
        ]}>
        <Card style={practiceStyles.container}>
          <Card style={practiceStyles.titleContainer}>
            <TextCard type="subtitle">Practice</TextCard>
            <TextCard
              style={practiceStyles.centerText}
              themeColor="textSecondary">
              This starter app includes example{'\n'}code to help you get
              started.
            </TextCard>

            <ExternalLink href="https://docs.expo.dev" asChild>
              <Pressable
                style={({ pressed }) => pressed && practiceStyles.pressed}>
                <Card
                  type="backgroundElement"
                  style={practiceStyles.linkButton}>
                  <TextCard type="link">Expo documentation</TextCard>
                  <SymbolView
                    tintColor={theme.text}
                    name={{
                      ios: 'arrow.up.right.square',
                      android: 'link',
                      web: 'link'
                    }}
                    size={12}
                  />
                </Card>
              </Pressable>
            </ExternalLink>
          </Card>

          <Card style={practiceStyles.sectionsWrapper}>
            <CollapsibleCard title="File-based routing">
              <TextCard type="small">
                This app has two screens:{' '}
                <TextCard type="code">src/app/index.tsx</TextCard> and{' '}
                <TextCard type="code">src/app/explore.tsx</TextCard>
              </TextCard>
              <TextCard type="small">
                The layout file in{' '}
                <TextCard type="code">src/app/_layout.tsx</TextCard> sets up the
                tab navigator.
              </TextCard>
              <ExternalLink href="https://docs.expo.dev/router/introduction">
                <TextCard type="linkPrimary">Learn more</TextCard>
              </ExternalLink>
            </CollapsibleCard>

            <CollapsibleCard title="Android, iOS, and web support">
              <Card
                type="backgroundElement"
                style={practiceStyles.collapsibleContent}>
                <TextCard type="small">
                  You can open this project on Android, iOS, and the web. To
                  open the web version, press{' '}
                  <TextCard type="smallBold">w</TextCard> in the terminal
                  running this project.
                </TextCard>
                <Image
                  source={require('@/assets/images/tutorial-web.png')}
                  style={practiceStyles.imageTutorial}
                />
              </Card>
            </CollapsibleCard>

            <CollapsibleCard title="Images">
              <TextCard type="small">
                For static images, you can use the{' '}
                <TextCard type="code">@2x</TextCard> and{' '}
                <TextCard type="code">@3x</TextCard> suffixes to provide files
                for different screen densities.
              </TextCard>
              <Image
                source={require('@/assets/images/react-logo.png')}
                style={practiceStyles.imageReact}
              />
              <ExternalLink href="https://reactnative.dev/docs/images">
                <TextCard type="linkPrimary">Learn more</TextCard>
              </ExternalLink>
            </CollapsibleCard>

            <CollapsibleCard title="Light and dark mode components">
              <TextCard type="small">
                This template has light and dark mode support. The{' '}
                <TextCard type="code">useColorScheme()</TextCard> hook lets you
                inspect what the user&apos;s current color scheme is, and so you
                can adjust UI colors accordingly.
              </TextCard>
              <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                <TextCard type="linkPrimary">Learn more</TextCard>
              </ExternalLink>
            </CollapsibleCard>

            <CollapsibleCard title="Animations">
              <TextCard type="small">
                This template includes an example of an animated component. The{' '}
                <TextCard type="code">
                  src/components/ui/collapsible.tsx
                </TextCard>{' '}
                component uses the powerful{' '}
                <TextCard type="code">react-native-reanimated</TextCard> library
                to animate opening this hint.
              </TextCard>
            </CollapsibleCard>
          </Card>
          {Platform.OS === 'web' && <WebBadge />}
        </Card>
      </ScrollView>
    </FiberProvider>
  );
}
