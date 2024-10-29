import React from "react";
import ChildComponent from "./childComponent";

class MyComponent extends React.Component {
    /*
    JSX => return block
    */
    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            { id: 'Job1', title: 'Developer', salary: '500' },
            { id: 'Job2', title: 'Tester', salary: '400' },
            { id: 'Job3', title: 'PM', salary: '1000' }
        ]
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

                <ChildComponent
                    name={this.state.firstName}
                    age={'22'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;