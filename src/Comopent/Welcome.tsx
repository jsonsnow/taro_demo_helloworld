import { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import PropTypes from 'prop-types';

export default class Welcome extends Component {
    render () {
        return <View><Text>{this.props.name}</Text></View>
    }
}

// Welcome.prototype = {
//     name: PropTypes.string
// }