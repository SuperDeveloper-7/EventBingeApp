import React, {Component} from 'react';
import {TouchableOpacity, Image, View ,BackHandler } from 'react-native'
import {WebView} from 'react-native-webview'
import {API_URL} from '../Request'

const IconSize = {height: 30, width: 30};

export default class extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            canGoBack: false
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    
    UNSAFE_componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick() {
        console.log("back button pressed");
        this.props.goBack(null);
        return true;
    }

    pushState = (state) => {
        console.log(state);
      
        this.setState({
            canGoBack: state.canGoBack
        })
    };

    goBack = () => {
        this.refs.webview.goBack();
    };

    render() {


        const {canGoBack} = this.state;
        return <View style={{flex: 1, paddingTop: 20}}>
            <WebView
                ref='webview'
                style={{flex: 1}}
                onNavigationStateChange={this.pushState}
                source={{uri: `${API_URL}/login`}}
                domStorageEnabled={true}
                startInLoadingState={true}
                originWhitelist={['*']}
                mixedContentMode="compatibility"
            />
           
            <View
                style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'black', padding: 10}}>
                <TouchableOpacity onPress={this.goBack}>
                    {
                        canGoBack ? <Image source={require('../BackIcon.png')} style={IconSize}/> : null
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.goBack()}>
                    <Image source={require('../HomeIcon.png')} style={IconSize}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.refs.webview.reload()}>
                    <Image source={require('../RefreshIcon.png')} style={IconSize}/>
                </TouchableOpacity>
            </View>
        </View>
    }
}