import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';
import LoginForm from "./components/LoginForm";
// var config = {
//     apiKey: "AIzaSyDiseHohgN2xNU9HPPfSisdnRtufuvLYlM",
//     authDomain: "auth-fc013.firebaseapp.com",
//     databaseURL: "https://auth-fc013.firebaseio.com",
//     projectId: "auth-fc013",
//     storageBucket: "auth-fc013.appspot.com",
//     messagingSenderId: "364628553610"
// };
class App extends Component {
    componentWillMount () {
        firebase.initializeApp({
            apiKey: "AIzaSyDiseHohgN2xNU9HPPfSisdnRtufuvLYlM",
            authDomain: "auth-fc013.firebaseapp.com",
            databaseURL: "https://auth-fc013.firebaseio.com",
            projectId: "auth-fc013",
            storageBucket: "auth-fc013.appspot.com",
            messagingSenderId: "364628553610"
        });
    }

    render() {
        return (
            <View>
               <Header headerText="Authenticate tHiS bItCh"/>
                <LoginForm />
            </View>
        )
    }

}
export default App;