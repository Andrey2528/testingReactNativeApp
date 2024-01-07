import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './home';
import { FullPostScreen } from './fulPost';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="News" component={HomeScreen} options={{ title: "News" }} />
                <Stack.Screen name="FullPost" component={FullPostScreen} options={{ title: "Post" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}