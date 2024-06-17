import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [data, setdata] = useState({
        "name": "",
        "email": "",
        "num":"",
        "gender":"",
        "pass": "",
        "cpass": ""
    })
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        axios.post("http://localhost:8080/signup", data).then(
            (response) => {
                if (response.data.status == "success") {
                    alert("Success")
                }
                else {
                    alert("Failed")
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
{/*             <Navbar/> */}
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               
                                <div className="row g-3">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        {/* <label htmlFor="" className="form-label">Name</label> */}
                                        <input type="text" className="form-control" name='name' placeholder="Name" value={data.name} onChange={inputhandler} />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        {/* <label htmlFor="" className="form-label">Email</label> */}
                                        <input type="email" className="form-control" name='email' placeholder="Email" value={data.email} onChange={inputhandler} />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        {/* <label htmlFor="" className="form-label">Phone Number</label> */}
                                        <input type="text" className="form-control" name='num' placeholder="Phone Number" value={data.num} onChange={inputhandler} />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        {/* <label htmlFor="" className="form-label">Gender</label> */}
                                        {/* <input type="text" className="form-control" name='gender' placeholder="Gender" value={data.gender} onChange={inputhandler} /> */}
                                        <select name="gender" id="" className="form-control" placeholder="Select Your Gender" onChange={inputhandler}>
                                            <option value="Select">Select Your Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        {/* <label htmlFor="" className="form-label">Password</label> */}
                                        <input type="password" className="form-control" name='pass' placeholder="Password" value={data.pass} onChange={inputhandler} />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        {/* <label htmlFor="" className="form-label">Confirm Password</label> */}
                                        <input type="password" className="form-control" name='cpass' placeholder="Confirm Password" value={data.cpass} onChange={inputhandler} />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <center>
                                            <button className="btn btn-primary" onClick={readValue}>Sign Up</button> <br /><br />
                                            <Link to="/">Login</Link> <br /> <br />
                                        </center>
                                    </div>
                                </div>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
