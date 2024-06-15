import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {

    const [data, setData] = useState([])
    const fetchdata = () => {
        axios.post("http://localhost:8080/viewall")
            .then(
                (response) => {
                    setData(response.data)
                }
            ).catch(
                (error) => {
                    alert(error.message)
                }
            )
    }

    useEffect(() => { fetchdata() },[])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <br /><h3>View All</h3><br />
                        </center>
                        <table class="table table-secondary table-striped table-hover table-bordered border-secondary ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Bus Name</th>
                                    <th scope="col">Route</th>
                                    <th scope="col">Bus No.</th>
                                    <th scope="col">Driver No.</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{value.bname}</td>
                                                <td>{value.route}</td>
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

export default ViewAll