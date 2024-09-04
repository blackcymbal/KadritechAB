import { BookmarkProvider } from "@/contexts/bookmarkContext";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import Toast from "react-native-toast-message";
const queryClient = new QueryClient();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "AnekBangla-Regular": require("../assets/fonts/AnekBangla-Regular.ttf"),
    "AnekBangla-Medium": require("../assets/fonts/AnekBangla-Medium.ttf"),
    "AnekBangla-SemiBold": require("../assets/fonts/AnekBangla-SemiBold.ttf"),
    "AnekBangla-Bold": require("../assets/fonts/AnekBangla-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BookmarkProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider value={DefaultTheme}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
            </Stack>
          </ThemeProvider>
        </QueryClientProvider>
      </BookmarkProvider>
      <Toast topOffset={55} />
    </GestureHandlerRootView>
  );
}
