import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import firebase from "firebase";

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAk8Vjlo-1RidMDEJxT9QE31HHC5XlX9_M",
      authDomain: "one-time-password-b79e4.firebaseapp.com",
      databaseURL: "https://one-time-password-b79e4.firebaseio.com",
      projectId: "one-time-password-b79e4",
      storageBucket: "one-time-password-b79e4.appspot.com",
      messagingSenderId: "935925197560"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default App;
