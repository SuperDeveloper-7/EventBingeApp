import React,{Component} from 'react';

import {
    View,
    Image,
    TextInput,
    TouchableOpacity,
    BackHandler,
    StyleSheet,
    Dimensions,
} from 'react-native';

import Animate from '../components/Animate'
import Text from "../components/Text";
import {Link} from "react-router-native";

export default class extends Component {

    constructor(props) {
        console.log("logins")
        super(props) 
        console.log(props)
    }
    
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    UNSAFE_componentWillUnmount() {
        this.backHandler.remove()
    }
    
    handleBackPress = () => {
        // this.props.history.goBack();
        this.props.goBack();
        return true;
    }
    render() {
        return <View style={{flex:1}}>

            <Animate style={styles.container}>
                <Image source={require('../logo.png')} resizeMode="center" style={styles.image}/>
            </Animate>

            <Animate animation={'fadeIn'} style={{flex:8, padding: 20}}>
                <View style={{marginBottom:20}}>
                    <Text size={36}>Login</Text>
                </View>

                <View>
                    <TextInput
                        autoFocus={true}
                        ref={ref => this.pass = ref}
                        onChangeText={text => this.password = text}
                        keyboardType={'decimal-pad'}
                        placeholder="Password"
                        placeholderTextColor="rgba(255,255,255,.8)"
                        style={{
                            color: 'rgba(255,255,255,.8)',
                            padding: 10,
                            backgroundColor: 'rgba(255,255,255,.3)'
                        }}
                    />
                </View>

                <View>
                    <TouchableOpacity onPress={()=>this.props.login({history:this.props.history,password:this.password})} style={{backgroundColor: 'rgba(255,255,255,.02)', padding: 10, borderWidth: 1, borderColor: 'white',margin:30}}>
                        <View>
                            <Text style={{color: 'white', textAlign: 'center', fontWeight: '800'}}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <Link to='/forgot'>
                        <View>
                            <Text style={{color: 'rgba(255,255,255,.5)', textAlign: 'center',marginBottom:20}}>I forgot my password</Text>
                        </View>
                    </Link>
                    <Link to='/about'>
                        <View>
                            <Text style={{color: 'rgba(255,255,255,.5)', textAlign: 'center'}}>What is EventsSmarter / How do I get started?</Text>
                        </View>
                    </Link>
                </View>
                <View style={{flex:3}}/>
            </Animate>

        </View>
    }
};
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    image: {
      width: DEVICE_WIDTH-60,
      height:200,
    },
})