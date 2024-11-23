import { Stack } from 'expo-router';
//import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {
  useFonts,
  FrankRuhlLibre_500Medium,
  FrankRuhlLibre_800ExtraBold,
  FrankRuhlLibre_900Black,
} from '@expo-google-fonts/frank-ruhl-libre';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontLoaded] = useFonts({
    FrankRuhlLibre_500Medium,
    FrankRuhlLibre_800ExtraBold,
    FrankRuhlLibre_900Black,
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
