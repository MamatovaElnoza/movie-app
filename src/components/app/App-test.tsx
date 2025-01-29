import React, { Component } from 'react'

interface UserProps {
    firstname: string;
    lastname: string;
    link: string;
}

interface UserState {
    counter: number;
  }

class User extends Component<UserProps, UserState> {
    constructor(props: UserProps) {
        super(props)
        this.state = {
            counter: 10,
            text : 'text'
        }
    }

    clickIncrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter +1,
        }))
    }
    clickDecrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter -1,
        }))
    }
    clickRestart = () => {
        this.setState({
            counter: 0,
        })
    }

    render() {
        const { firstname, lastname, link } = this.props;
        return (
            <div className="w-50 mx-auto">
                <div className="border p-3 mt-5">
                    <h3>mening ismim - {firstname}, sharifim - {lastname}</h3>
                    <a href={link}> youtube kanalim</a>
                    <p>{this.state.text}</p>
                    <div className="pt-3">
                        <button onClick={this.clickIncrement} className="btn btn-success">increment</button>
                        <button onClick={this.clickDecrement} className="btn btn-danger mx-2">decrement</button>
                        <button onClick={this.clickRestart} className="btn btn-info">restart</button>
                    </div>
                    <p>{this.state.counter}</p>
                </div>
            </div>
        )
    }
}

const AppTest: React.FC = () => {
    return (
        <div>
            <User firstname='samar' lastname='bad' link='youtube.com' />
            <User firstname='omar' lastname='good' link='youtube.com' />
        </div>
    )
}

export default AppTest