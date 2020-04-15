
import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {getAll,getAllReceptionist} from "../UserFunction";

class AdminProfile extends Component {
    constructor() {
        super()
        this.state = {
            receptionist:[],
            users:[],
            errors: {}
        }
    }

    componentDidMount() {
        this.getData().then(result => this.setState({
            users: result
        }))
        this.getReceptionist().then(res=>this.setState({
            receptionist:res
        }))
    }
    getData() {
        // replace with whatever your api logic is.
        return getAll();
    }
    getReceptionist(){
        return getAllReceptionist();
    }
    handleClick=()=>{
        alert("hi");
    }
    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Receptionists</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>

                        {this.state.receptionist.map((t,id)=>{
                            return <tr key={id}>
                                <td>{t.first_name}</td>
                                <td>{t.last_name}</td>
                                <td>{t.email}</td>
                                <td><button >Delete</button></td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                    <button onClick={this.handleClick}>Add Receptionist</button>
                </div>
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">All Users</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>

                        {this.state.users.map((t,id)=>{
                            return <tr key={id}>
                                <td>{t.first_name}</td>
                                <td>{t.last_name}</td>
                                <td>{t.email}</td>
                                <td><button >Delete</button></td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AdminProfile