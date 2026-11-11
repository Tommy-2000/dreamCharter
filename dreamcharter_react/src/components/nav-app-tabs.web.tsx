import {
    TabList,
    TabListProps,
    Tabs,
    TabSlot,
    TabTrigger,
    TabTriggerSlotProps
} from 'expo-router/ui';
import { Pressable, StyleSheet, useColorScheme, View } from 'react-native';

import { Colors, MaxContentWidth, Spacing } from '@/utils/theme';

import { Card } from './card';
import { TextCard } from './text-card';

export default function NavAppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <WebTabList>
          <TabTrigger name="dashboard" href="/" asChild>
            <TabButton>Dashboard</TabButton>
          </TabTrigger>
          <TabTrigger name="dreamchart" href="/dreamchart" asChild>
            <TabButton>DreamChart</TabButton>
          </TabTrigger>
          <TabTrigger name="opportunities" href="/opportunities" asChild>
            <TabButton>Opportunities</TabButton>
          </TabTrigger>
          <TabTrigger name="practice" href="/practice" asChild>
            <TabButton>Practice</TabButton>
          </TabTrigger>
          <TabTrigger name="profile" href="/profile" asChild>
            <TabButton>Profile</TabButton>
          </TabTrigger>
        </WebTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({
  children,
  isFocused,
  ...props
}: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <Card
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        style={styles.tabButtonView}>
        <TextCard
          type="small"
          themeColor={isFocused ? 'text' : 'textSecondary'}>
          {children}
        </TextCard>
      </Card>
    </Pressable>
  );
}

export function WebTabList(props: TabListProps) {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light'];

  return (
    <View {...props} style={styles.tabListContainer}>
      <Card type="backgroundElement" style={styles.innerContainer}>
        <TextCard type="smallBold" style={styles.brandText}>
          dreamCharter
        </TextCard>

        {props.children}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    width: '100%',
    padding: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  innerContainer: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.five,
    borderRadius: Spacing.five,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: Spacing.two,
    maxWidth: MaxContentWidth
  },
  brandText: {
    marginRight: 'auto'
  },
  pressed: {
    opacity: 0.7
  },
  tabButtonView: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three
  },
  externalPressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.one,
    marginLeft: Spacing.three
  }
});
