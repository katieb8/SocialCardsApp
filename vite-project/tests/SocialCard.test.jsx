import React from 'react';
import { expect, describe, test, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SocialCard1 from '../src/components/SocialCard1';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

describe('Social Card', () => {
    // beforeEach(() => {
    //     global.fetch = vi.fn(() =>
    //       Promise.resolve({
    //         status: 200,
    //         json: () => Promise.resolve({ results: [] }),
    //       })
    //     );
    // });

    // afterEach(() => {
    //     vi.clearAllMocks();
    // });

    test('Should render the social card', () => {
        const mockUserData = {
            name: { first: 'John' },
            picture: { medium: 'https://google.com' }
        };

        const { container } = render(<SocialCard1 userData={mockUserData} />);
        const firstCard = container.querySelector('.socialCard1');
        expect(firstCard).toBeInTheDocument();
    });

    it('Should render all the expected props', () => {
        const mockUserData = {
            name: { first: 'John' },
            picture: { medium: 'https://google.com/image/thisisatest' },
            text: 'hey'
        };

        const { container } = render(<SocialCard1 userData={mockUserData} />);
        const cardDesc = container.querySelector('.card-text');
        expect(screen.getByTestId(`card-title-${mockUserData.name.first}`)).toBeInTheDocument();
        expect(screen.getByTestId(`profile-pic-${mockUserData.name.first}`)).toBeInTheDocument();

        expect(cardDesc).toBeTruthy();
    })

    it('Should return a 200 response from the users api', async () => {
        const response = await fetch('https://randomuser.me/api');
        expect(response.status).toBe(200);
    })

    it('Should return a valid JSON response', async () => {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        expect(data).toHaveProperty('results');
        expect(Array.isArray(data.results)).toBe(true);

        data.results.forEach((user) => {
            expect(user).toHaveProperty('name');
            expect(user).toHaveProperty('picture');
        })
    })
});
