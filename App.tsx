import React, { Component } from "react";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Hello, reducer as helloReducer } from "./src/Hello";

export class GlobalState {
  public static initial(): GlobalState {
    return { name: "Aleksey", enthusiasmLevel: 3 };
  }

  public name: string = "";
  public enthusiasmLevel: number = 0;
}

const store: Store<GlobalState> = createStore(helloReducer);

export default class App extends Component<{}> {
  public render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Hello />
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
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
