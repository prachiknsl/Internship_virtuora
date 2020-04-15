import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
    render() {
        return (
            <nav >
                <div>
                    <ul >
                        <li >
                            <Link to="/" >
                                Home
                            </Link>
                            <li >
                                <Link to="/admin" >
                                    Admin
                                </Link>
                            </li>
                            <li >
                                <Link to="/receptionist" >
                                    Receptionist
                                </Link>
                            </li>
                            <li >
                                <Link to="/login" >
                                    User Login
                                </Link>
                            </li>
                            <li >
                                <Link to="/register" >
                                    Register
                                </Link>
                            </li>
                        </li>
                        {localStorage.usertoken ?  <li >
                            <a href="" onClick={this.logOut.bind(this)} >
                                Logout
                            </a>
                        </li>: <></>}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Landing)