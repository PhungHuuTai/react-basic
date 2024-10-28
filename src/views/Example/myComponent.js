import React from "react";
import ChildComponent from "./childComponent";

class MyComponent extends React.Component {
    /*
    JSX => return block
    */
    state = {
        firstName: "",
        lastName: ""
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('>>> check data input: ', this.state)
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)} /><br /> <br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>

                <ChildComponent name={'Tai'} age={'22'}/>
            </>
        )
    }
}

export default MyComponent;