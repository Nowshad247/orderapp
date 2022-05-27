import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screen/HomeScreen";
import { useFonts } from 'expo-font';
import OrderScreen from "./src/screen/OrderScreen";
export default function App() {
  const Stack = createNativeStackNavigator();
  const [loaded] = useFonts({
    'Antonio-Regular': require('./assets/fonts/Antonio-Regular.ttf'),
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
