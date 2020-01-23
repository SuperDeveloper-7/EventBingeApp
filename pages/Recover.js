import React, {Component} from 'react';
import {View, BackHandler} from 'react-native'
import {WebView} from 'react-native-webview'
import Link from "react-router-native/Link";
import Text from "../components/Text";
import {API_URL} from "../Request";

export default class extends Component {
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    UNSAFE_componentWillUnmount() {
        this.backHandler.remove()
    }
    
    handleBackPress = () => {
        this.props.history.goBack();
        return true;
    }
    render() {
        return <View style={{flex:1}}>
            <WebView style={{flex:1}}
                source={{uri: `${API_URL}/recover/org-password`}}
                domStorageEnabled={true}
                startInLoadingState={true}
                originWhitelist={['*']}
                mixedContentMode="compatibility"
            />
            <Link to='/' style={{backgroundColor: 'rgba(255,255,255,.02)', padding: 10, borderWidth: 1, borderColor: 'white',margin:30}}>
                <View>
                    <Text style={{color: 'white', textAlign: 'center', fontWeight: '800'}}>Done</Text>
                </View>
            </Link>
        </View>
    }
}