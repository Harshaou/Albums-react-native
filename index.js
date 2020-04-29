import React from 'react';
import {View, AppRegistry, YellowBox} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return (
        <View >
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
        
    );
};
    
YellowBox.ignoreWarnings(['Remote debugger'])
AppRegistry.registerComponent('MyTestApp', () => App);
