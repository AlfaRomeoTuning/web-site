import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { CONTACT_EMAIL } from '../../config';

function renderHome() {
    render(
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Home />
        </MemoryRouter>
    );
}

test('introduces Giulia and Stelvio services with a clear primary action', () => {
    renderHome();
    expect(screen.getByRole('heading', { name: /Your Alfa Romeo\. Tuned with purpose\./, level: 1 })).toBeInTheDocument();
    const services = screen.getByRole('region', { name: 'Choose what you want to change.' });
    expect(screen.getByRole('link', { name: 'Explore Tuning Services' })).toHaveAttribute('href', `#${services.id}`);
    expect(within(services).getByText(/Feature availability depends on your vehicle/)).toBeInTheDocument();
});

test('links each service to its detailed product section', () => {
    renderHome();
    const links = [
        ['Explore Engine Tuning', '/device#engine-tuning'],
        ['Explore Transmission Options', '/device#transmission-customization'],
        ['Explore ABS Customisation', '/device#abs-customisation'],
        ['Review Module Reset', '/device#module-reset']
    ];
    links.forEach(([name, href]) => {
        expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
    });
});

test('retains device, R&D, partner and contact paths with real product imagery', () => {
    renderHome();
    expect(screen.getByRole('link', { name: /Explore the Remote Flasher & Setup Guide/ })).toHaveAttribute('href', '/device#setup-guide');
    expect(screen.getByRole('link', { name: /Explore the R&D Catalog/ })).toHaveAttribute('href', '/rnd');
    expect(screen.getByRole('link', { name: /Find a Partner/ })).toHaveAttribute('href', '/partners');
    expect(screen.getByRole('link', { name: 'Email Alfa Tuning' })).toHaveAttribute('href', `mailto:${CONTACT_EMAIL}`);
    expect(screen.getByRole('img', { name: /Exploded view of the Alfa Tuning/ })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /3D model of the Giulia GTAm front bumper/ })).toBeInTheDocument();
});
