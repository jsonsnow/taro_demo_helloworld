import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from "@tarojs/components";
export default class Welcome extends Taro.Component {
  render() {
    return <View><Text>{this.props.name}</Text></View>;
  }
}
// Welcome.prototype = {
//     name: PropTypes.string
// }