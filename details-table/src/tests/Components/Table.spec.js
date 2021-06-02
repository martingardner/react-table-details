import React from 'react';
import { render , screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Table from '../../Components/Table';

describe('Components - Table', ()=> {
    beforeEach( ()=> {
        render(
            <Table />
        )
    });

    test('Table element exists', ()=> {
        const tableElement = screen.getByRole('table');
        expect(tableElement).toBeTruthy();
    })
})