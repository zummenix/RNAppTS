import React, { Component } from "react";
import { Provider } from "react-redux";
import { Platform, StyleSheet, Text, View } from "react-native";
import HelloScreen from "./src/Hello";
import { createStore, Store } from "redux";
import { reducer as helloReducer } from "./src/Hello";
import { GlobalState } from "./src/GlobalState";

const store: Store<GlobalState> = createStore(helloReducer);

export default class App extends Component<{}> {
  public render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HelloScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
