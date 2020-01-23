import React from 'react';

import {
    View,
    Image,
} from 'react-native';

import Text from "../components/Text";
import {Link} from "react-router-native";

export default (props) => (
    <View style={{flex:1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 20}}>
            <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center', paddingTop: 15}}>
                <Image source={require('../logo.png')} style={{width:205,height:38}}/>
            </View>
            <View style={{flex: 1}}>
                <Link to={'/'} style={{
                    backgroundColor: 'rgba(255,255,255,.02)',
                    padding: 5,
                    borderWidth: 1,
                    borderColor: 'white',
                    marginRight: 30,
                    marginLeft: 30,
                    marginTop: 20
                }}>
                    <View>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 12}}>LOGOUT</Text>
                    </View>
                </Link>
            </View>
        </View>

        {props.children}

    </View>
);