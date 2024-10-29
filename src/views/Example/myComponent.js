import React from "react";
import ChildComponent from "./childComponent";
import AddComponent from "./addComponent";

class MyComponent extends React.Component {
    /*
    JSX => return block
    */
    state = {
        arrJobs: [
            { id: 'Job1', title: 'Developer', salary: '500' },
            { id: 'Job2', title: 'Tester', salary: '400' },
            { id: 'Job3', title: 'PM', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidMount() {
        console.log(">>> run component did mount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(">>> run did update:", 'prev state', prevState, 'curr props', this.state)
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;