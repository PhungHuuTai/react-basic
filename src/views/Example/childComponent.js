import React from "react";
import './Demo.scss';

// Class Component (Statefull)
class ChildComponent extends React.Component {
    state = {
        showJob: false,
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob,
        })
    }

    handleOnclickDelete = (job) => {
        this.props.deleteJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {!showJob ?
                    <div>
                        <button className="btn-show" onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></>
                                            <button onClick={() => this.handleOnclickDelete(item)}>X</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// Function component (Stateless)
// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;