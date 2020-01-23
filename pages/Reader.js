import React, {Component} from 'react';
import {View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import Layout from "./Layout";
import Text from "../components/Text";
import {Link} from "react-router-native";
import {BackHandler} from "react-native";
import Animate from "../components/Animate";
import EventBar from "../components/EventBar";

export default class extends Component {

    onSuccess = (e) => {
        //e.data
        const {event} = this.props;
        // this.props.redirect({route: 'Checking', params: {event,payload:e.data}});
        this.props.history.push('/checking', {qrCodeData: e.data})
    };

    componentDidUpdate(){
        this.scanner.reactivate();
    }
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
        return (<Layout>
            <QRCodeScanner
                ref={(node)=>{this.scanner=node}}
                containerStyle={{flex: 8}}
                fadeIn={false}
                onRead={this.onSuccess}
                topViewStyle={{backgroundColor: 'rgba(0,0,0,.2)', flex: 1}}
                topContent={<EventBar {...this.props}/>}
                bottomContent={<Link to={"/scan"}>
                    <View>
                        <Text style={{
                            borderWidth: 1,
                            borderColor: 'white',
                            padding: 5,
                            paddingHorizontal: 40
                        }}>Cancel</Text>
                    </View>
                </Link>}
            />
        </Layout>)
    }
}