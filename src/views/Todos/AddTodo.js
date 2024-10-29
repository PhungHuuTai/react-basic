import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ""
    }

    handleInput = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAdd = (event) => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo!`)
            return;
        }
        this.props.addNewTodo({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        })
        this.setState({
            title: ""
        })
    }

    render() {
        let {title} = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleInput(event)} />
                <button type="button" className="add" onClick={(event) => this.handleAdd(event)}>
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo;