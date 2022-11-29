import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const List = () => {
    
    const [list,setList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allPets')
        .then((res)=>{
            console.log(res)
            setList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h1>Pet Shelter</h1>
                    <h4>These pets are looking for a good home</h4>
                </div>
                <div className="col-sm">
                    <Link to={"/pets/new"}>add a pet to the shelter</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm border border-dark">
                    <p>Name</p>
                    {
                        list.map((pets)=>(
                            <div>
                                <p>{pets.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="col-sm border border-dark">
                    <p>Type</p>
                    {
                        list.map((pets)=>(
                            <div>
                                <p>{pets.type}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="col-sm border border-dark">
                    <p>Actions</p>
                    {
                        list.map((pets)=>(
                            <div>
                                <Link to={`/pets/${pets._id}`}>Details</Link>
                                <span> | </span>
                                <Link to={`/pets/edit/${pets._id}`}>Edit</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default List