import React from "react";

class MyComponent extends React.Component {
    /*
    JSX => return block
    */
    state = {
        name: "Tai",
        channel: "TaiPhung",
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnClick = () => {
        alert("Thanks you!");
    }
    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state.name}
                </div>
                <div className="second">
                    This is my channel's name {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleOnClick()}> 
                        Click me
                    </button>
                </div>
            </>
        )
    }
}

export default MyComponent;