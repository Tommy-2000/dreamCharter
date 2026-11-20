import { Canvas, Group, matchFont, Text, useFonts } from 'react-native-skia';
import MorphButton from './morph-button';

export default function MorphNavTabs() {
  // Skia Text Font Rendering
  const SkRenderFontMgr = useFonts({
    Nunito: [require('@/assets/fonts/Nunito-Medium.ttf')]
  });

  if (!SkRenderFontMgr) {
    return null;
  }
  const SkRenderFontStyle = {
    fontFamily: 'Nunito',
    fontWeight: 'normal',
    fontSize: 14
  } as const;

  const SkRenderFont = matchFont(SkRenderFontStyle, SkRenderFontMgr);

  return (
    <Canvas>
      <Group layer>
        <MorphButton
          x={0}
          y={0}
          height={24}
          width={24}
          outerShadowBlur={3}
          innerShadowBlur={1}>
          <Text font={SkRenderFont} text="Dashboard" />
        </MorphButton>
        <MorphButton
          x={0}
          y={0}
          height={24}
          width={24}
          outerShadowBlur={3}
          innerShadowBlur={1}>
          <Text font={SkRenderFont} text="DreamChart" />
        </MorphButton>
        <MorphButton
          x={0}
          y={0}
          height={24}
          width={24}
          outerShadowBlur={3}
          innerShadowBlur={1}>
          <Text font={SkRenderFont} text="Opportunities" />
        </MorphButton>
        <MorphButton
          x={0}
          y={0}
          height={24}
          width={24}
          outerShadowBlur={3}
          innerShadowBlur={1}>
          <Text font={SkRenderFont} text="Practice" />
        </MorphButton>
        <MorphButton
          x={0}
          y={0}
          height={24}
          width={24}
          outerShadowBlur={3}
          innerShadowBlur={1}>
          <Text font={SkRenderFont} text="Profile" />
        </MorphButton>
      </Group>
    </Canvas>
  );
}
