import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Button } from '@tarojs/components';
import './index.scss';
import Welcome from '../../Comopent/Welcome';
import Click from '../../Comopent/Click';
export default class Index extends Taro.Component {
  constructor(props) {
    super(props);

    this.state = { test: 'json snow' };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="index">
        <Text>Hello world!</Text>
        <View className="button">
          <Text>{this.state.test}</Text>
          <Button onClick={this.onClick}>click me</Button>
        </View>
        <Welcome name="json snow"></Welcome>
        <Click></Click>
      </View>;
  }
  onClick = e => {
    e.stopPropagation();
    this.setState({ test: 'change from json snow' });
  };
  config = {
    navigationBarTitleText: '首页'
  };
}