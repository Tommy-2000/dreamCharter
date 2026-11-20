import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { Card } from '@/components/card';
import { HintRowCard } from '@/components/hint-row-card';
import { TextCard } from '@/components/text-card';
import { WebBadge } from '@/components/web-badge';
import { dashboardStyles } from '@/utils/styles';
import { FiberProvider } from 'its-fine';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <TextCard type="small">use browser devtools</TextCard>;
  }
  if (Device.isDevice) {
    return (
      <TextCard type="small">
        shake device or press <TextCard type="code">m</TextCard> in terminal
      </TextCard>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <TextCard type="small">
      press <TextCard type="code">{shortcut}</TextCard>
    </TextCard>
  );
}

export default function DashboardScreen() {
  return (
    <FiberProvider>
      <Card style={dashboardStyles.container}>
        <SafeAreaView style={dashboardStyles.safeArea}>
          <Card style={dashboardStyles.heroSection}>
            <AnimatedIcon />
            <TextCard type="title" style={dashboardStyles.title}>
              Welcome to&nbsp;dreamCharter!
            </TextCard>
            <TextCard type="small" style={dashboardStyles.container}>
              Job search and careers support built by Dreamers for Dreamers.
              Skills-based jobs, messaging and careers support web & app
              platform for graduates, apprentices and work experience students.
            </TextCard>
          </Card>

          <Card type="backgroundElement" style={dashboardStyles.stepContainer}>
            <HintRowCard
              title="Try editing"
              hint={<TextCard type="code">src/app/index.tsx</TextCard>}
            />
            <HintRowCard title="Dev tools" hint={getDevMenuHint()} />
            <HintRowCard
              title="Fresh start"
              hint={<TextCard type="code">npm run reset-project</TextCard>}
            />
          </Card>

          {Platform.OS === 'web' && <WebBadge />}
        </SafeAreaView>
      </Card>
    </FiberProvider>
  );
}
