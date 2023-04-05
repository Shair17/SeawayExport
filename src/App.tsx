import React, {useEffect} from 'react';
import {ThemeProvider} from 'react-native-magnus';
import {Root} from './navigation/Root';
import {NavigationContainer} from '@react-navigation/native';
import {NotifierWrapper} from 'react-native-notifier';
import {useAuthStore} from './stores/useAuthStore';

export default function App() {
  const loadTokens = useAuthStore(s => s.loadToken);

  useEffect(() => {
    loadTokens();
  }, []);

  return (
    <NotifierWrapper>
      <ThemeProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </NotifierWrapper>
  );
}
