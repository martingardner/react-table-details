import React from 'react';

const ModalSectionData = (props) => {
    return (
        <section key={props.name}>
            <div>{props.name}</div>
            <div>{props.data}</div>
        </section>
    )
}

export default ModalSectionData