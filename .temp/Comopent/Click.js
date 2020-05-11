import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from "@tarojs/components";
export default class Clock extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return <View>
            <Text>Heloo, world!</Text>
            <Text>现在时间是 {this.state.date.toLocaleTimeString()} </Text>
          </View>;
  }
}