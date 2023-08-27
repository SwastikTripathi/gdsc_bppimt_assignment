import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function CreateUser() {

    const navigate = useNavigate();
    
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value  =event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://gdscasssignment.000webhostapp.com/index.php/user/save', inputs).then(function(response) {
            console.log(response.data);
            navigate('/');
            
        });
    }

    return (
        <div style={{width: '60%'}}>
            <h1>Create Users</h1>

            <form onSubmit={handleSubmit}>
                <span class="form-outline mb-4">
                    <input type="text" name="name" onChange={handleChange} placeholder="Enter Name" id="form2Example1" class="form-control" />
                </span>

                <span class="form-outline mb-4">
                    <input type="text" name="email" onChange={handleChange} placeholder="Enter Email" id="form2Example1" class="form-control" />
                </span>

                <span class="form-outline mb-4">
                    <input type="text" name="stream" onChange={handleChange} placeholder="Enter Stream" id="form2Example1" class="form-control" />
                </span>

                <span class="form-outline mb-4">
                    <input type="number" name="year" onChange={handleChange} placeholder="Enter Year" id="form2Example1" class="form-control" />
                </span><br/>

                <button class="btn btn-primary btn-block mb-4">Sign Up</button>
            </form>

        </div>
    )
}
