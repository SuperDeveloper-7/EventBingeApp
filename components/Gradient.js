import React from 'react';
import {StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default (props) => (<LinearGradient colors={props.colors||['#c2c2bc', '#655f60', '#37373a']} style={styles.linearGradient}>
    {props.children}
</LinearGradient>)

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    }
});