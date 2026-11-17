import { Platform } from "expo";
import { useFont } from "react-native-skia";

export default function useSkiaFont() {
  const deviceFontFamily = Platform.select({
    android: "helvetica",
    ios: "helvetica",
    default: "sans-serif",
  });
  return useFont(deviceFontFamily);
}
