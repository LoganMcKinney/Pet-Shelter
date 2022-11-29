import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'


const OnePet = () => {

    const {id} = useParams()

    const navigate = useNavigate()
    
    const [pet,setPet] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/FindById/${id}`)
        .then((res)=>{
            setPet(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res)=>{
            console.log("Successfully deleted from database")
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="col-6 mx-auto">
            <div className="row">
                <div className="col-sm">
                    <h1>Pet Shelter</h1>
                    <h4>Detailes about: {pet.name}</h4>
                </div>
                <div className="col-sm">
                    <Link to={"/"}>back to home</Link><br></br>
                    <button className="btn btn-danger mt-3" onClick={(e)=>deleteHandler(pet._id)}>Adopt {pet.name}</button>
                </div>
            </div>
            <div className="row border border-dark">
                <div className="col-sm">
                    <p>Pet type:</p>
                    <p>Description:</p>
                    <p>Skills:</p>
                </div>
                <div className="col-sm">
                    <p>{pet.type}</p>
                    <p>{pet.description}</p>
                    <p>{pet.skill1}</p>
                    <p>{pet.skill2}</p>
                    <p>{pet.skill3}</p>
                </div>
            </div>

        </div>
    )
}

export default OnePet