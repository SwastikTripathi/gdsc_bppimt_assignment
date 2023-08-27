import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`https://gdscasssignment.000webhostapp.com/index.php/user/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`sql6.freemysqlhosting.net/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (

        <div style={{width: '60%'}}>
            <h1>Edit User</h1>

            <form onSubmit={handleSubmit}>
                <span class="form-outline mb-4">
                    <input type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="Enter Name" id="form2Example1" class="form-control" />
                </span>

                <span class="form-outline mb-4">
                    <input type="text" name="email" value={inputs.email} onChange={handleChange} placeholder="Enter Email" id="form2Example1" class="form-control" />
                </span>

                <span class="form-outline mb-4">
                    <input type="text" name="stream" value={inputs.stream} onChange={handleChange} placeholder="Enter Stream" id="form2Example1" class="form-control" />
                </span>

                <span class="form-outline mb-4">
                    <input type="number" name="year" value={inputs.year} onChange={handleChange} placeholder="Enter Year" id="form2Example1" class="form-control" />
                </span><br/>

                <button class="btn btn-primary btn-block mb-4">Update</button>
            </form>

        </div>


        // <div>
        //     <h1>Edit user</h1>
        //     <form onSubmit={handleSubmit}>
        //         <table cellSpacing="10">
        //             <tbody>
        //                 <tr>
        //                     <th>
        //                         <label>Name: </label>
        //                     </th>
        //                     <td>
        //                         <input value={inputs.name} type="text" name="name" onChange={handleChange} />
        //                     </td>
        //                 </tr>
        //                 <tr>
        //                     <th>
        //                         <label>Email: </label>
        //                     </th>
        //                     <td> 
        //                         <input value={inputs.email} type="text" name="email" onChange={handleChange} />
        //                     </td>
        //                 </tr>
        //                 <tr>
        //                     <th>
        //                         <label>Stream: </label>
        //                     </th>
        //                     <td>
        //                         <input value={inputs.password} type="text" name="stream" onChange={handleChange} />
        //                     </td>
        //                 </tr>
        //                 <tr>
        //                     <th>
        //                         <label>Year: </label>
        //                     </th>
        //                     <td>
        //                         <input value={inputs.stream} type="number" name="year" onChange={handleChange} />
        //                     </td>
        //                 </tr>
        //                 <tr>
        //                     <td colSpan="2" align ="right">
        //                         <button>Save</button>
        //                     </td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </form>
        // </div>
    )
}
