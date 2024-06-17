import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Login = () => {

    const navigate = useNavigate()
    const [data, setdata] = useState({
        "email": "",
        "pass": ""
    })
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        axios.post("http://localhost:8080/login", data).then(
            (response) => {
                if (response.data.status == "success") {
                    alert("Login Success")
                    navigate("/add")
                }
                else {
                    alert("Login Failed")
                }
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }

    return (
        <div>
            {/* <Navbar/> */}
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <br /><br />
                        <div class="card w-75 mx-auto border-rounded text-bg-light border-primary">
                            <div class="card-body">
                                <center>
                                    <h3 class="card-title">Signup Here...</h3> <hr />
                                </center>

                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        {/* <label htmlFor="" className="form-label"><b>Email ID</b></label> */}
                                        <input type="text" className="form-control" placeholder='Email' name='email' value={data.email} onChange={inputhandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        {/* <label htmlFor="" className="form-label"><b>Password</b></label> */}
                                        <input type="password" name="pass" placeholder='Password' value={data.pass} onChange={inputhandler} id="" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <center>
                                            <button className="btn btn-success" onClick={readValue}>Login</button><br /> <br />
                                            <Link to="/signup">Signup</Link>
                                        </center>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login