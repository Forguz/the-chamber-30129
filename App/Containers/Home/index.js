import React, { Component } from "react";
import { View } from "react-native";
import ApplicationStyles from "../../Utils/ApplicationStyles";
import { styles } from "./styles";
import HomeChats from "./HomeChats";
import HomeCreate from "./HomeCreate";
import BottomNavigation from "./BottomNavigation";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bottomIndex: 0,
    };
  }

  componentDidMount() {
  }

  render() {
    const { bottomIndex } = this.state;
    return (
      <View style={ApplicationStyles.fullView}>
        <View style={styles.mainContainer}>
          {bottomIndex === 0 && <HomeChats />}
          {bottomIndex === 1 && <HomeCreate />}
        </View>
        <BottomNavigation bottomIndex={bottomIndex} onChange={index => this.setState({ bottomIndex: index })} />
      </View>
    );
  }
}
