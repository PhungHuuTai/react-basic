import React from "react";
import { withRouter } from 'react-router';
import Color from "../HOC/Color";
import image from "../../assets/images/cat.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todos')
        // }, 3000)
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);   
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('>>> check props redux: ', this.props.dataRedux);
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world from Homepage
                </div>
                <div>
                    <img src={image} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} 
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={()=>this.handleCreateUser()}>Add new</button>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER'}),
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));