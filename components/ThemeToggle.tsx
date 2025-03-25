import { Pressable, View } from "react-native";
import { setAndroidNavigationBar } from "@/lib/android-navigation-bar";
import Icon from "@/components/Icon";
import { useColorScheme } from "@/lib/useColorScheme";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  function toggleColorScheme() {
    const newTheme = isDarkColorScheme ? "light" : "dark";
    setColorScheme(newTheme);
    setAndroidNavigationBar(newTheme);
  }

  return (
    <Pressable
      onPress={toggleColorScheme}
      className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2"
    >
      {({ pressed }) => (
        <View
          className={cn(
            "aspect-square flex-1 items-start justify-center pt-0.5 web:px-5",
            pressed && "opacity-70",
          )}
        >
          {isDarkColorScheme ? <Icon name="MoonStar" /> : <Icon name="Sun" />}
        </View>
      )}
    </Pressable>
  );
}
