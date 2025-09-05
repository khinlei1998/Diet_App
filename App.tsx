import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/store';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HealthConcernsScreen from './src/screens/HealthConcernsScreen';
import DietScreen from './src/screens/DietScreen';
import AllergyScreen from './src/screens/AllergyScreen';
import LifeStyleScreen from './src/screens/LifeStyleScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen
            name="HealthConcerns"
            component={HealthConcernsScreen}
          />
          <Stack.Screen name="Diet" component={DietScreen} />
          <Stack.Screen name="Allergy" component={AllergyScreen} />
          <Stack.Screen name="Lifestyle" component={LifeStyleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
