import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'

const Form = () => {

    const [name,setName] = useState('')
    const [type,setType] = useState('')
    const [description,setDescription] = useState('')
    const [skill1,setSkill1] = useState('')
    const [skill2,setSkill2] = useState('')
    const [skill3,setSkill3] = useState('')
    const [errors,setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addPet',{
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        }).then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div className="col-6 mx-auto">
            <div className="row">
                <div  className="col-sm">
                    <h1>Pet Shelter</h1>
                    <h5>Know a pet needing a home?</h5>
                </div>
                <div  className="col-sm">
                    <Link to={"/"}>back to home</Link>
                </div>
            </div>
            <form onSubmit={submitHandler}>
                <div className="row border border-dark p-1">
                    <div className="col-sm">
                        <label>Pet Name:</label><br></br>
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br></br>
                            { errors.name ? <span>{errors.name.message}</span> : null }<br></br>
                        <label>Pet Type:</label><br></br>
                            <input type="text" value={type} onChange={(e)=>setType(e.target.value)}/><br></br>
                            { errors.type ? <span>{errors.type.message}</span> : null }<br></br>
                        <label>Description:</label><br></br>
                            <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/><br></br>
                            { errors.description ? <span>{errors.description.message}</span> : null }<br></br>
                            <button className="btn btn-primary" type='submit'>Submit</button>
                    </div>
                    <div className="col-sm">
                        <p>Skills (optional)</p>
                        <label>Skill 1:</label><br></br>
                            <input type="text" value={skill1} onChange={(e)=>setSkill1(e.target.value)}/><br></br>
                        <label>Skill 2:</label><br></br>
                            <input type="text" value={skill2} onChange={(e)=>setSkill2(e.target.value)}/><br></br>
                        <label>Skill 3:</label><br></br>
                            <input type="text" value={skill3} onChange={(e)=>setSkill3(e.target.value)}/><br></br>
                        
                    </div>
                </div>
            </form>
        </ div>
    )
}

export default Form    