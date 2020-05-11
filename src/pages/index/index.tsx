import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import Welcome from '../../Comopent/Welcome'
import Click from '../../Comopent/Click'

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = {test: 'json snow'}
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  
  onClick = (e) => {
    e.stopPropagation()
    this.setState({test: 'change from json snow'})
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <View className='button'>
          <Text>{this.state.test}</Text>
          <Button onClick={this.onClick}>click me</Button>
        </View>
        <Welcome name='json snow'></Welcome>
        <Click></Click>
      </View>
    )
  }
}
