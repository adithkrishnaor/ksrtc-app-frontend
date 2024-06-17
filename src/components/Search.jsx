import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {

    const [data, setData] = useState(
        {
            "route": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const [result, setResult] = useState([])

    const readValue = () => {
        axios.post("http://localhost:8080/search",data).
            then(
                (response) => {
                    setResult(response.data)
                }
            ).catch(
                (error) => {
                    alert(error.message)
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
                            <h3>Search Route</h3>
                        </center>
                        <label htmlFor="" className="form-label">Route</label>
                        <select id="" className="form-control" name='route' onChange={inputHandler}>
                            <option value="Select">Select</option>
                            <option value="EKM-TVM">EKM-TVM</option>
                            <option value="TVM-EKM">TVM-EKM</option>
                            <option value="EKM-KZHKD">EKM-KZHKD</option>
                            <option value="KZHKD-EKM">KZHKD-EKM</option>
                            <option value="KNR-TSR">KNR-TSR</option>
                            <option value="TSR-KNR">TSR-KNR</option>
                        </select>                        <br />
                        <center>
                            <button className="btn btn-primary" onClick={readValue}>Search</button><br /> <br />
                            <a href="/add">Add Bus</a>
                        </center>
                    </div>
                    <center> <br /> <h3>Results</h3> <br /> </center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table  table-striped  table-hover">
                            <thead>
                                <tr class="table-secondary">
                                    <th scope="col">#</th>
                                    <th scope="col">Bus Name</th>
                                    <th scope="col">Bus No.</th>
                                    <th scope="col">Driver No.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    result.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{value.bname}</td>
                                                <td>{value.busno}</td>
                                                <td>{value.driverno}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search