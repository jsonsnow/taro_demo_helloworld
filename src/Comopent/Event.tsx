import { Component } from "react";
import { Button } from "@tarojs/components";

export default class Popper extends Component {
    constructor () {
        super(...arguments)
        this.state = {name: 'hello world'}
    }

    preventPop(name, test, e) {
        e.stopPropagation()
    }
    render() {
        return <Button onClick={this.preventPop.bind(this, this.state.name, 'test')}></Button>
    }
}