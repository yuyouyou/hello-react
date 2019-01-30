import React, { Component } from 'react'

class TodoList extends Component {

    constructor () {
        super()
        this.state = {
            list: [],
            inputValue: ''
        }
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleInputChang(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    render () {
        return (
        <div>
            <div>
                <input value={this.state.inputValue} onChange={this.handleInputChang.bind(this)} />
                <button onClick={this.handleBtnClick.bind(this)}>add</button>
            </div>
            <ul>
                {
                    this.state.list.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
        )
    }
}

export default TodoList