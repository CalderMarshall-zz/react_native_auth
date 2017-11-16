
import React from 'react';
// import ReactNative from 'react-native';
import {Text, View, StyleSheet} from 'react-native';

const Header = (props) => {
    return (

        <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
        {/*<Text style={styles.viewStyle}>here is a bottom buttons placement</Text>*/}
        </View>
    )




};
const styles = {
    textStyle: {
        fontSize: 20,
        marginTop: 15

    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: "#F5F5F5",
        paddingTop: 15,
        paddingBottom: 5,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .2,
        elevation: 2,
        position: 'relative'
    }

};
export {Header};