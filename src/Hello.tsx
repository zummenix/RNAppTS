import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

interface IState {
  enthusiasmLevel: number;
}

export class Hello extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { enthusiasmLevel: props.enthusiasmLevel || 0 };
  }

  public render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          {greeting(
            this.props.name,
            exclamationMarks(this.state.enthusiasmLevel)
          )}
        </Text>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="-" onPress={this.onDecrement} color="red" />
          </View>
          <View style={styles.divider} />
          <View style={styles.button}>
            <Button title="+" onPress={this.onIncrement} color="#31b4ea" />
          </View>
        </View>
      </View>
    );
  }

  private onIncrement = () =>
    this.setState({ enthusiasmLevel: increment(this.state.enthusiasmLevel) });

  private onDecrement = () =>
    this.setState({ enthusiasmLevel: decrement(this.state.enthusiasmLevel) });
}

function increment(n: number): number {
  return Math.min(20, n + 1);
}

function decrement(n: number): number {
  return Math.max(0, n - 1);
}

function greeting(name: string, suffix: string): string {
  return "Hello " + name + suffix;
}

function exclamationMarks(numChars: number): string {
  if (numChars < 0) {
    return "";
  } else {
    return Array(numChars).join("!");
  }
}

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
