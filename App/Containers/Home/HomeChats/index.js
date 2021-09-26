import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ApplicationStyles from "../../../Utils/ApplicationStyles";
import { styles } from "./styles";
import { scale } from "../../../Utils/scale";
import CBSvg from "../../../assets/svgs/CBSvg";
import SearchSVG from "../../../assets/svgs/SearchSVG";
import CBAvatar from "../../../Components/CBAvatar";
import Images from "../../../Utils/Images";
import ChatListItem from "./ChatListItem";

export default class HomeChats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: Array.from({ length: 10 }, (v, i) => i),
    };
  }

  renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity>
          <CBSvg icon={SearchSVG} width={scale(24)} height={scale(24)} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <CBAvatar size={scale(56)} image={Images.ic_avatar_temp1} />
        <Text style={styles.profileTitle}>Bikesh Shrestha</Text>
      </View>
      <Text style={styles.listTitle}>Conversations</Text>
    </View>
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={ApplicationStyles.fullView}>
        <FlatList
          data={this.state.items}
          style={{ flex: 1 }}
          renderItem={({ item, index }) => (
            <ChatListItem item={item} index={index} />
          )}
          keyExtractor={this.keyExtractor}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={() => <View style={{ marginBottom: scale(16) }} />}
        />
      </View>
    );
  }
}
