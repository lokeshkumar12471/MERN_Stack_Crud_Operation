import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUser(result.data))
            .catch(err => console.log(err))
    }, [])
    const deleteData = (id) => {
        axios.get(`http://localhost:3001/delete/${id}`)
            .then(result => {
                console.log('Data Deleted Successfully')
                console.log(result.data)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to={'/create'} className='btn btn-success float-end mb-5'>Create +</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user && user.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td><Link to={`/update/${item._id}`} className="btn btn-warning">Update</Link>
                                    <button onClick={() => deleteData(item._id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users