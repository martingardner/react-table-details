import React from 'react';

const Modal = (props) => {
    /* list of props from address that we want to loop through and show if there is data */
    const addressList = ['city', 'street', 'suite', 'zipcode']
    const companyList = ['bs', 'catchPhrase', 'name']

    /* generate mapped section data for address and company */
    const addressSection = addressList.map( (a) => ModalSectionData(props.data.address[a], a) );
    const companySection = companyList.map( (c) => ModalSectionData(props.data.company[c], c) );
 
    return (
        <>
            <div className="overlay"></div>
            <div className="modal">
                <h2>{props.data.name} Details</h2>
                <h3>Address Details</h3>
                {addressSection}
                <h3>Company Details</h3>
                {companySection}
                <button onClick={ ()=> props.closeModal(false)}>Close</button>
            </div>        
        </>
    )
}

export default Modal

const ModalSectionData = (data, name) => {
    return (
        <section key={name}>
            <div>{name}</div>
            <div>{data}</div>
        </section>
    )
}