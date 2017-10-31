import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';

import styles from './style.js'
import MainScreen from './MainScreen.js'


export default class SearchScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.messageBoxTitleText}>Hello !</Text>

                <TextInput style={styles.messageBoxBodyText}
                           placeholder="Type city here!"
                           onChangeText={(text) => this.setState({text})}
                />
                <Button
                    onPress={() => navigate('MainScreen', {city : this.state.text})}
                    title="Search"
                />
            </View>
        );
    }
}

