import React,{Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from "./common";

class LoginForm extends Component {
    state = {email: '', password: '', error: '', loading: false};
    onButtonPress() {
        const {email, password} = this.state;

        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(() => {
                    this.setState({error: "Authentication Failed."})
                })
        });
    }
    renderButton() {
        if (this.state.loading = true) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        )
    }
    render () {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="poop@gmail.com"
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        label="Email"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        value={this.state.password}
                        label="Password"
                        onChangeText={password => this.setState({password})}
                        type="password"
                    />

                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }

}
const styles = {
    errorTextStyle: {
        fontSize: 22,
        alignSelf: 'center',
        color: "#FC3338"
    }
};

export default LoginForm;