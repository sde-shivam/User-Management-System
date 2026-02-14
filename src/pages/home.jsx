import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

export default function Home({ searchTerm }) {

    const [users, setUsers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    };

    const filteredUsers = users.filter((user) => {
        return (
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user, index) => (
                                <tr key={user.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link 
                                            className="btn btn-primary mx-2" 
                                            to={`/viewuser/${user.id}`}
                                        >
                                            View
                                        </Link>
                                        <Link 
                                            className="btn btn-outline-primary mx-2" 
                                            to={`/edituser/${user.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <button 
                                            className="btn btn-danger mx-2" 
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-5 shadow-sm">
                                    <h5 className="text-muted">
                                        No users found matching "<strong>{searchTerm}</strong>"
                                    </h5>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}