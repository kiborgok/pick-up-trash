import './admin.css';

import {useState} from 'react';

function AdminPage(){
    let clients = [
        {
            id: 1,
            name: "Alex kiborgok",
            residence: "Rimpa",
            mobile: "0706941217",
            email: "alex@gmail.com",
            isTrashPicker: false
        },
        {
            id: 2,
            name: "Sam Kuria",
            residence: "Anonymous",
            mobile: "0712345678",
            email: "sam@gmail.com",
            isTrashPicker: false
        },
               {
            id: 3,
            name: "Joylene Kirui",
            residence: "Anonymous",
            mobile: "0712345678",
            email: "joylene@gmail.com",
            isTrashPicker: false
        },
        {
            id: 4,
            name: "Collins Odinga",
            residence: "Anonymous",
            mobile: "0712345678",
            email: "collins@gmail.com",
            isTrashPicker: false
        },
        {
            id: 5,
            name: "Kipkoech Sang",
            residence: "Anonymous",
            mobile: "0712345678",
            email: "sang@gmail.com",
            isTrashPicker: false
        },
        {
            id: 6,
            name: "Danis Muga",
            residence: "Anonymous",
            mobile: "0712345678",
            email: "alex@gmail.com",
            isTrashPicker: false
        }
    ]

    const [users, setUsers] = useState(clients);
    
    //Function to delete client from users table
    let handleDelete = (userId) => {
        let newUserList = users.filter(user => user.id !== userId);
        setUsers(newUserList)

    }

    //Function to make a user to be a trash picker or not
    let handleIsTrachPicker = (user) => {
        let arrayOfUsers = [...users];
        let index = arrayOfUsers.indexOf(user);
        arrayOfUsers[index] = {...arrayOfUsers[index]};
        arrayOfUsers[index].isTrashPicker = !arrayOfUsers[index].isTrashPicker
        setUsers(arrayOfUsers);
    }

    return(
        <div className='container'>
            <h3>Clients Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Residence</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Trash Picker</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.residence}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.email}</td>
                                    <td>{user.isTrashPicker ? "True" : "False"}</td>
                                    <td>
                                        <button className='edit'>Edit</button>
                                    </td>
                                    <td>
                                        <button className='mk-trash-p' onClick={() => handleIsTrachPicker(user)}>Make trash picker</button>
                                    </td>
                                      <td>
                                        <button className='delete' onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AdminPage;