import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Platform, Pressable } from 'react-native';
import {
  SortableGrid,
  SortableGridItem,
  SortableGridRenderItemProps
} from 'react-native-reanimated-dnd';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Opportunity, OpportunityType } from '@/api/models';
import { Card } from '@/components/card';
import { CollapsibleCard } from '@/components/collapsible-card';
import { ExternalLink } from '@/components/external-link';
import ScrollCard from '@/components/scroll-card';
import { TextCard } from '@/components/text-card';
import { WebBadge } from '@/components/web-badge';
import { useTheme } from '@/hooks/use-theme';
import { opportunitiesStyles } from '@/utils/styles';
import { BottomTabInset, Spacing } from '@/utils/theme';
import { FiberProvider } from 'its-fine';
import { useCallback } from 'react';

export default function OpportunitiesScreen() {
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

  const opportunitiesData: Opportunity[] = [
    {
      id: '1',
      opportunityTitle: '',
      opportunityDescription: '',
      opportunityType: OpportunityType.GRADUATE_SCHEME,
      salary: 1234,
      datePosted: '123123',
      dateUpdated: '123123',
      company: '',
      recruiter: ''
    },
    {
      id: '2',
      opportunityTitle: '',
      opportunityDescription: '',
      opportunityType: OpportunityType.GRADUATE_SCHEME,
      salary: 1234,
      datePosted: '123123',
      dateUpdated: '123123',
      company: '',
      recruiter: ''
    },
    {
      id: '3',
      opportunityTitle: '',
      opportunityDescription: '',
      opportunityType: OpportunityType.GRADUATE_SCHEME,
      salary: 1234,
      datePosted: '123123',
      dateUpdated: '123123',
      company: '',
      recruiter: ''
    },
    {
      id: '4',
      opportunityTitle: '',
      opportunityDescription: '',
      opportunityType: OpportunityType.GRADUATE_SCHEME,
      salary: 1234,
      datePosted: '123123',
      dateUpdated: '123123',
      company: '',
      recruiter: ''
    }
  ];

  const renderItem = useCallback(
    (props: SortableGridRenderItemProps<(typeof opportunitiesData)[0]>) => {
      const { item, id, ...rest } = props;
      return (
        <SortableGridItem key={id} id={id} data={item} {...rest}>
          <Card>
            <TextCard>{item.opportunityTitle}</TextCard>
            <TextCard>{item.opportunityDescription}</TextCard>
            <TextCard>{item.opportunityType}</TextCard>
            <TextCard>{item.salary}</TextCard>
            <TextCard>{item.company}</TextCard>
          </Card>
        </SortableGridItem>
      );
    },
    []
  );

  return (
    <FiberProvider>
      <ScrollCard
        style={[
          opportunitiesStyles.scrollView,
          { backgroundColor: theme.background }
        ]}
        contentInset={insets}
        contentContainerStyle={[
          opportunitiesStyles.contentContainer,
          contentPlatformStyle
        ]}>
        <Card style={opportunitiesStyles.container}>
          <Card style={opportunitiesStyles.titleContainer}>
            <TextCard type="subtitle">Opportunities</TextCard>
            <TextCard
              style={opportunitiesStyles.centerText}
              themeColor="textSecondary">
              This starter app includes example{'\n'}code to help you get
              started.
            </TextCard>

            <ExternalLink href="https://docs.expo.dev" asChild>
              <Pressable
                style={({ pressed }) => pressed && opportunitiesStyles.pressed}>
                <Card
                  type="backgroundElement"
                  style={opportunitiesStyles.linkButton}>
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

          <Card style={opportunitiesStyles.sectionsWrapper}>
            <Card type="backgroundElement" style={{ alignItems: 'center' }}>
              <SortableGrid
                data={opportunitiesData}
                renderItem={renderItem}
                dimensions={{
                  columns: 4,
                  itemWidth: 80,
                  itemHeight: 80,
                  rowGap: 12,
                  columnGap: 12
                }}
              />
            </Card>

            <CollapsibleCard title="Images">
              <TextCard type="small">
                For static images, you can use the{' '}
                <TextCard type="code">@2x</TextCard> and{' '}
                <TextCard type="code">@3x</TextCard> suffixes to provide files
                for different screen densities.
              </TextCard>
              <Image
                source={require('@/assets/images/react-logo.png')}
                style={opportunitiesStyles.imageReact}
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
      </ScrollCard>
    </FiberProvider>
  );
}
