import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    function getUsers() {
        axios.get('sql6.freemysqlhosting.net/user/save').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    
    const deleteUser = (id) => {
        axios.delete(`sql6.freemysqlhosting.net/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return (
        <div>
            <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id&ensp;&ensp;</th>
                        <th>Name&ensp;&ensp;</th>
                        <th>Email</th>
                        <th>Stream&ensp;&ensp;</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                    <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.stream}</td>
                        <td>{user.year}</td>
                        <td>
                            <Link className='btn btn-outline-secondary' to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                            <button className='btn btn-outline-danger' onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
