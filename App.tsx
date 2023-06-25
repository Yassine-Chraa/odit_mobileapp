import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider} from 'react-native-safe-area-context';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator/>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
