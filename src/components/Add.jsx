import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {

    const [data, setData] = useState({
        "bname": "",
        "route": "",
        "busno": "",
        "driverno": ""
    })

    const inputhandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue =() => {
        axios.post("http://localhost:8080/add",data)
        .then(
            (response) => {
                if (response.data.status=="success") {
                    alert("Bus Added Successfully")
                } else {
                    alert("Fail to add bus, Try again")
                }
            }
        ).catch(
            (error) => {
                console.log(error.message)
                }
        )
        }

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <h3>Add Bus</h3>
                        </center>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Bus Name</label>
                                <input type="text" className="form-control" name='bname' value={data.value} onChange={inputhandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Route</label>
                                <input type="text" className="form-control" name='route' value={data.value} onChange={inputhandler}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Bus Number</label>
                                <input type="text" className="form-control" name='busno' value={data.value} onChange={inputhandler}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Driver Number</label>
                                <input type="text" className="form-control" name='driverno' value={data.value} onChange={inputhandler}/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center>
                                    <button className="btn btn-info" onClick={readValue}>Add</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add