import React from 'react';
import { expect, describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SocialCard1 from '../src/components/SocialCard1';

describe('Social Card', () => {
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
});
