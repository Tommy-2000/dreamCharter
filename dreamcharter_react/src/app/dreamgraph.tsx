import { Card } from '@/components/card';
import ScrollCard from '@/components/scroll-card';
import { RenderSkia } from '@/components/skia/render-skia';
import { TextCard } from '@/components/text-card';
import { WebBadge } from '@/components/web-badge';
import { useTheme } from '@/hooks/use-theme';
import { dreamgraphStyles } from '@/utils/styles';
import { BottomTabInset, Spacing } from '@/utils/theme';
import { FiberProvider } from 'its-fine';
import React, { useState } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// On web, any Skia components have to wait before the canvaskit file has loaded to render properly
// Import any Skia components through React's promise function
// const SkiaGradient = React.lazy(
//   () => import('@/components/skia/skia-gradient')
// );

const SkiaDreamGraph = React.lazy(
  () => import('@/components/skia/skia-dreamgraph')
);

export default function DreamGraphScreen() {
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

  const [skiaIsReady, setSkiaIsReady] = useState(false);

  // Skia Text Font Rendering
  // const SkRenderFontMgr = useFonts({
  //   Nunito: [require('@/assets/fonts/Nunito-Medium.ttf')]
  // });

  // if (!SkRenderFontMgr) {
  //   return null;
  // }
  // const SkRenderFontStyle = {
  //   fontFamily: 'Nunito',
  //   fontWeight: 'normal',
  //   fontSize: 14
  // } as const;

  // const SkRenderFont = matchFont(SkRenderFontStyle, SkRenderFontMgr);

  return (
    <FiberProvider>
      <ScrollCard
        style={[
          dreamgraphStyles.scrollView,
          { backgroundColor: theme.background }
        ]}
        contentInset={insets}
        contentContainerStyle={[
          dreamgraphStyles.contentContainer,
          contentPlatformStyle
        ]}>
        <Card style={dreamgraphStyles.container}>
          <Card style={dreamgraphStyles.titleContainer}>
            <TextCard type="subtitle">DreamChart</TextCard>
          </Card>

          <Card style={dreamgraphStyles.sectionsWrapper}>
            {/* RenderSkia tells React to wait before the canvaskit file for Skia
          is loaded on the browser */
            /* On Android and iOS, it will ignore the
          canvaskit file and render natively on the device */}
            <Card>
              <React.Suspense fallback={<ActivityIndicator />}>
                <RenderSkia />
                <SkiaDreamGraph />
              </React.Suspense>
            </Card>
          </Card>
          {Platform.OS === 'web' && <WebBadge />}
        </Card>
      </ScrollCard>
    </FiberProvider>
  );
}
