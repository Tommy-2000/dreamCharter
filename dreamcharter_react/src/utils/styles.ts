import { StyleSheet } from 'react-native';
import { BottomTabInset, MaxContentWidth, Spacing } from './theme';

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  safeArea: {
    flex: 3,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four
  },
  title: {
    textAlign: 'center'
  },
  code: {
    textTransform: 'uppercase'
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four
  }
});

export const dreamchartStyles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six
  },
  centerText: {
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.7
  },
  linkButton: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
    justifyContent: 'center',
    gap: Spacing.one,
    alignItems: 'center'
  },
  sectionsWrapper: {
    gap: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three
  },
  collapsibleContent: {
    alignItems: 'center'
  },
  imageTutorial: {
    width: '100%',
    aspectRatio: 296 / 171,
    borderRadius: Spacing.three,
    marginTop: Spacing.two
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
});

export const opportunitiesStyles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six
  },
  centerText: {
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.7
  },
  linkButton: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
    justifyContent: 'center',
    gap: Spacing.one,
    alignItems: 'center'
  },
  sectionsWrapper: {
    gap: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three
  },
  collapsibleContent: {
    alignItems: 'center'
  },
  imageTutorial: {
    width: '100%',
    aspectRatio: 296 / 171,
    borderRadius: Spacing.three,
    marginTop: Spacing.two
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
});

export const practiceStyles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six
  },
  centerText: {
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.7
  },
  linkButton: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
    justifyContent: 'center',
    gap: Spacing.one,
    alignItems: 'center'
  },
  sectionsWrapper: {
    gap: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three
  },
  collapsibleContent: {
    alignItems: 'center'
  },
  imageTutorial: {
    width: '100%',
    aspectRatio: 296 / 171,
    borderRadius: Spacing.three,
    marginTop: Spacing.two
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
});

export const profileStyles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six
  },
  centerText: {
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.7
  },
  linkButton: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
    justifyContent: 'center',
    gap: Spacing.one,
    alignItems: 'center'
  },
  sectionsWrapper: {
    gap: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three
  },
  collapsibleContent: {
    alignItems: 'center'
  },
  imageTutorial: {
    width: '100%',
    aspectRatio: 296 / 171,
    borderRadius: Spacing.three,
    marginTop: Spacing.two
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
});

// Custom Navigation Components
// withUnistyles works best for components with custom props
// useUnistyles causes a crash when switching themes and...
// ...re-rendering React Navigation components that are tied with Expo Router
