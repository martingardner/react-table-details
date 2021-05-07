import React, { useState , useEffect } from 'react';
import Modal from './Modal';

const Table = () => {

    const [getUserData, setUserData] = useState();
    const [getShowModal, setShowModal] = useState(false);
    const [getSelectDetails, setSelectDetails] = useState();

    /* fetch user data */
    useEffect( ()=> {
        async function fetchUsers(){
            const data = await getUsers();
            setUserData(data);
        }
        fetchUsers();
    }, []);

    /* used to close modal from Modal component */
    const closeModal = (bool) => setShowModal(bool);

    /* get row data form modal and open modal */
    const triggerModal = (data) => {
        setSelectDetails(data);
        setShowModal(true);
    }

    /* if getUserData is back, populate it, otherwise don't show any rows */
    const tableRows = Array.isArray(getUserData) && getUserData.length > 0 ? 
        getUserData.map( (d)=> {
            return (
                <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>
                        <button onClick={ ()=> triggerModal(d)}>details</button>
                    </td>
                </tr>
            )
        }) : 
        null;

    const modal = getShowModal ? <Modal data={getSelectDetails} closeModal={closeModal}  /> : null

    return(
        <main>
            <h1>User Table</h1>
            <p>Click on details to get a details modal.</p>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>                
            </table>
            {modal}
        </main>
    )
}

export default Table;


async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log('data', data);
    return data;
}