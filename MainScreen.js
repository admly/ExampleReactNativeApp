
import React from 'react';
import {Text, View} from 'react-native';

import styles from './style.js'


export default  class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {weatherApiParam: 'init'};
    }
    static navigationOptions = ({ navigation }) => ({
        title: ` ${navigation.state.params.city}`,
    });


    componentDidMount(){
        fetch(`http://api.apixu.com/v1/current.json?key=0c82c413a5ca4c80a7f123530171010&q=${this.props.navigation.state.params.city}`)
            .then((response) => response.json())
            .then((responseJson) => {this.setState({weatherApiParam: responseJson.current.temp_c});})
            .catch((error) => {
                console.error(error);
            })

    }

    render() {

        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <Text>Current temperature in {params.city}: {this.state.weatherApiParam} C</Text>
            </View>
        );
    }
}

