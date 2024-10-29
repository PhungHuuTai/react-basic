import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    }

    handleChangeJobTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('>>> check data input: ', this.state)
        if (!this.state.title || !this.state.salary) {
            alert("Missing required params")
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: "",
            salary: ""
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="jtitle">Job's Title:</label><br />
                <input type="text" value={this.state.title}
                    onChange={(event) => this.handleChangeJobTitle(event)} /><br />
                <label htmlFor="salary">Salary:</label><br />
                <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)} /><br /> <br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}

export default AddComponent;