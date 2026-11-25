import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import MobileCdaPrivacyPolicy from './MobileCdaPrivacyPolicy';
import { CONTACT_EMAIL } from '../../config';

function renderPolicy() {
    return render(
        <MemoryRouter>
            <MobileCdaPrivacyPolicy />
        </MemoryRouter>
    );
}

test('discloses account, vehicle module and local connectivity data handling', () => {
    renderPolicy();

    expect(screen.getByRole('heading', { name: 'MobileCDA Privacy Policy', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '1.1 Account information', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '1.2 Vehicle module identification data', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '1.3 Local device connectivity', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '5. Data retention and deletion', level: 2 })).toBeInTheDocument();
});

test('provides a contact email for privacy and deletion requests', () => {
    renderPolicy();

    const contactLinks = screen.getAllByRole('link', { name: CONTACT_EMAIL });
    expect(contactLinks.length).toBeGreaterThan(0);
    contactLinks.forEach((link) => {
        expect(link.getAttribute('href')).toMatch(new RegExp(`^mailto:${CONTACT_EMAIL}`));
    });
});
