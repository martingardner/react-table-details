import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalSectionData from '../../Components/ModalSectionData';


describe('Component - ModalSectionData', () => {

    test('ModalSectionData renders name and data', () => {
        const name = "city";
        const data = "gwenborough";

        render(
            <ModalSectionData name={name} data={data} />
        )

        const screenName = screen.getByText('city');

        expect(screenName).toHaveTextContent('city');

    });

})

    

