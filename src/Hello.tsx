import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStandardAction, getType } from "typesafe-actions";
import { Action, Dispatch } from "redux";
import { GlobalState } from "./GlobalState";
import { connect } from "react-redux";

const increment = createStandardAction("increment")();
const decrement = createStandardAction("decrement")();

export function reducer(
  state: GlobalState = new GlobalState(),
  action: Action
): GlobalState {
  switch (action.type) {
    case getType(increment):
      return {
        ...state,
        enthusiasmLevel: Math.min(20, state.enthusiasmLevel + 1)
      };
    case getType(decrement):
      return {
        ...state,
        enthusiasmLevel: Math.max(0, state.enthusiasmLevel - 1)
      };
    default:
      return state;
  }
}

interface IProps {
  name: string;
  enthusiasmLevel: number;
}

interface IDispatchProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

class HelloScreen extends React.Component<IProps & IDispatchProps, {}> {
  public render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          {greeting(
            this.props.name,
            exclamationMarks(this.props.enthusiasmLevel)
          )}
        </Text>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="-" onPress={this.props.onDecrement} color="red" />
          </View>
          <View style={styles.divider} />
          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.props.onIncrement}
              color="#31b4ea"
            />
          </View>
        </View>
      </View>
    );
  }
}

function greeting(name: string, suffix: string): string {
  return "Hello " + name + suffix;
}

function exclamationMarks(numChars: number): string {
  if (numChars <= 0) {
    return "";
  } else {
    return Array(numChars + 1).join("!");
  }
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchProps {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement: () => {
      dispatch(decrement());
    }
  };
}

function mapStateToProps(state: GlobalState): IProps {
  return { name: state.name, enthusiasmLevel: state.enthusiasmLevel };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloScreen);

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 20
  },
  buttons: {
    flexDirection: "row",
    minHeight: 54,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#cbe3ed",
    borderRadius: 6
  },
  button: {
    flex: 1,
    minWidth: 54,
    alignSelf: "center",
    paddingVertical: 0
  },
  divider: {
    width: 1,
    backgroundColor: "#cbe3ed"
  },
  greeting: {
    color: "#999",
    fontWeight: "bold",
    paddingVertical: 20,
    paddingHorizontal: 20
  }
});
