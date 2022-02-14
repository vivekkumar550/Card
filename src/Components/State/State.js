import React from 'react'


class State extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Component",
            description: "I'm state component"
        }
    }

    UpdateUI = () => {

        this.setState({
            title: "Component of setState",
            description: "I'm seState component"
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.description}</p>
                <button onClick={this.UpdateUI}>Explore Me!!</button>
            </div>
        )

    }

}
export default State;