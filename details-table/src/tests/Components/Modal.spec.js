import React from 'react';
import { render , screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import Modal from '../../Components/Modal';

describe('Components - Modal', ()=> {

    const closeModal = jest.fn().mockImplementation( ()=> false);
    const getSelectDetails = {
        "id":1,
        "name":"Leanne Graham",
        "username":"Bret",
        "email":"Sincere@april.biz",
        "address":{
            "street":"Kulas Light",
            "suite":"Apt. 556",
            "city":"Gwenborough",
            "zipcode":"92998-3874",
            "geo":{"lat":"-37.3159","lng":"81.1496"}
        },
        "phone":"1-770-736-8031 x56442",
        "website":"hildegard.org",
        "company":{
            "name":"Romaguera-Crona",
            "catchPhrase":"Multi-layered client-server neural-net",
            "bs":"harness real-time e-markets"
        }
    }  

    beforeEach( ()=> {
        render(
            <Modal data={getSelectDetails} closeModal={closeModal}  />
        )
    });


    test('Modal renders with "Leanne Graham Details" showing', ()=> {
        const headingText = screen.getByRole('heading', { level: 2});
        expect(headingText).toHaveTextContent('Leanne Graham Details');
    });
    
    test('Modal has a close button', ()=> {
        const closeBtn = screen.getByRole('button');
        expect(closeBtn).toHaveTextContent('Close');
    });

    
});