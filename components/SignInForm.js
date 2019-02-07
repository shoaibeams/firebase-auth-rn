import React, { Component } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
import firebase from "firebase";

const ROOT_URL =
  "https://us-central1-one-time-password-c725a.cloudfunctions.net";

class SignInForm extends Component {
  state = { phone: "", code: "" };

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code
      });

      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10, width: 300 }}>
          <Input
            placeholder="Enter Phone Number"
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <View style={{ marginBottom: 10, width: 300 }}>
          <Input
            placeholder="Enter Code"
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>

        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;
