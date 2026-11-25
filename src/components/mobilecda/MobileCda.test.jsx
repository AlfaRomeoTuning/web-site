import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import MobileCda from './MobileCda';
import { CONTACT_EMAIL } from '../../config';

function renderPage() {
    return render(
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <MobileCda />
        </MemoryRouter>
    );
}

test('describes the app and links to the privacy policy and support', () => {
    renderPage();

    expect(screen.getByRole('heading', { level: 1, name: /Diagnostics and ECU flashing/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'ECU programming through a wiTECH VCI' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Read the mobileCDA Privacy Policy' })).toHaveAttribute('href', '/mobilecda/privacy-policy');
    expect(screen.getByRole('link', { name: CONTACT_EMAIL })).toHaveAttribute('href', expect.stringContaining(`mailto:${CONTACT_EMAIL}`));
    expect(screen.getByRole('link', { name: 'See the screens' })).toHaveAttribute('href', '#screens');
});

test('every screenshot has descriptive alt text', () => {
    renderPage();

    const gallery = screen.getByRole('region', { name: 'Screens' });
    const images = within(gallery).getAllByRole('img');
    expect(images).toHaveLength(8);
    images.forEach((img) => expect(img.getAttribute('alt').length).toBeGreaterThan(20));
});

test('opens a screenshot in the lightbox and steps through the gallery', async () => {
    const user = userEvent.setup();
    renderPage();

    const gallery = screen.getByRole('region', { name: 'Screens' });
    await user.click(within(gallery).getByRole('button', { name: /Enlarge screenshot: Home:/ }));

    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByText('Home: the selected vehicle and the tools available for it.')).toBeInTheDocument();
    expect(within(dialog).getByRole('button', { name: 'Previous image' })).toBeDisabled();

    await user.click(within(dialog).getByRole('button', { name: 'Next image' }));
    expect(within(screen.getByRole('dialog')).getByText(/Topology: the gateway/)).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
