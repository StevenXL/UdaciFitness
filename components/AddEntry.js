import React from "react";
import { View, Text } from "react-native";
import { getMetricsMetaInfo } from "../utils/helpers";

class AddEntry extends React.Component {
  render() {
    return (
      <View>
        {getMetricsMetaInfo("bike").getIcon()}
      </View>
    );
  }
}

export default AddEntry;
