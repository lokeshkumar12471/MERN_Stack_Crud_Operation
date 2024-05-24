import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const UpdateUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        age: ''
    });
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3001/getUser/${id}`)
            .then(result =>
                setUser(result.data)
            )
            .catch(err => console.log(err))
    }, [id])

    const changeHandle = (e) => {
        setUser({ ...user, [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value })
    }

    const submitHandle = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/updateUser/${id}`, user)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submitHandle}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="" className="float-start">Name</label>
                        <input type="text" value={user.name} name="name" className="form-control" placeholder="Enter Name" onChange={changeHandle} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" className="float-start">Email</label>
                        <input type="text" value={user.email} name="email" className="form-control" placeholder="Enter Email" onChange={changeHandle} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" className="float-start">Age</label>
                        <input type="text" value={user.age} name="age" className="form-control" placeholder="Enter Age" onChange={changeHandle} />
                    </div>
                    <button className="btn btn-success float-start" >Update</button>
                </form>
            </div>

        </div>
    )
}

export default UpdateUser