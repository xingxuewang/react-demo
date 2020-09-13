import React, { Component } from 'react'
import {observer} from 'mobx-react'
import Counter from '../../mobx/index'
@observer
class Index extends Component {
    render() {
        return (
            <div>
                <p>使用mobx</p>
                <button onClick={Counter.decrement}>-</button>
                {Counter.count}
                <button onClick={Counter.increment}>+</button>
            </div>
        )
    }
}
export default Index