
import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {getAll} from "../UserFunction";

class ReceptionistProfile extends Component {
    constructor() {
        super()
        this.state = {
            users:[],
            errors: {}
        }
    }

    componentDidMount() {
        this.getData().then(result => this.setState({
            users: result
        }))

    }
    getData() {
        // replace with whatever your api logic is.
        return getAll();
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

export default ReceptionistProfile;