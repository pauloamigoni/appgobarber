import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppPovider from './hooks';

import Routes from './routes/auth.routes';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <AppPovider>
            <View style={{ flex: 1, backgroundColor: '#312e38' }}>
                <Routes />
            </View>
        </AppPovider>
    </NavigationContainer>
);

export default App;
