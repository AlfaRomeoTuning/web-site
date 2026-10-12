import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Product from './Product';
import { CONTACT_EMAIL } from '../../config';

function renderProduct() {
    return render(
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Product />
        </MemoryRouter>
    );
}

test('links the performance summary to detailed Giulia and Stelvio engine tuning guidance', () => {
    renderProduct();

    expect(screen.getByRole('heading', { name: 'Boost Performance', level: 3 })).toBeInTheDocument();
    const link = screen.getByRole('link', { name: 'Explore Giulia and Stelvio engine tuning' });
    const section = screen.getByRole('region', { name: 'Engine Tuning for Alfa Romeo Giulia and Stelvio' });

    expect(link).toHaveAttribute('href', `#${section.id}`);
    expect(within(section).getByRole('heading', { name: '2.0-litre Engine Calibration', level: 3 })).toBeInTheDocument();
    expect(within(section).getByRole('heading', { name: 'Quadrifoglio and GTAm Software Options', level: 3 })).toBeInTheDocument();
    expect(within(section).getByText(/No single power or torque gain applies/)).toBeInTheDocument();
});

test('provides contact and setup actions alongside engine tuning guidance', () => {
    renderProduct();
    const section = screen.getByRole('region', { name: 'Engine Tuning for Alfa Romeo Giulia and Stelvio' });

    expect(within(section).getByRole('link', { name: 'Discuss Your Engine Tune' })).toHaveAttribute('href', `mailto:${CONTACT_EMAIL}`);
    const setupLink = within(section).getByRole('link', { name: 'Review the Flashing Setup Guide' });
    expect(setupLink).toHaveAttribute('href', '#setup-guide');
    expect(screen.getByRole('heading', { name: 'How to Setup' }).closest('section')).toHaveAttribute('id', 'setup-guide');
});

test('preserves switching between Android and iOS setup instructions', async () => {
    const user = userEvent.setup();
    renderProduct();

    expect(screen.getByRole('tabpanel', { name: 'Android Setup' })).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: 'iOS Setup' }));
    expect(screen.getByRole('tabpanel', { name: 'iOS Setup' })).toBeInTheDocument();
    expect(screen.queryByRole('tabpanel', { name: 'Android Setup' })).not.toBeInTheDocument();
});

test('links the transmission summary to gearbox compatibility and customization guidance', () => {
    renderProduct();

    expect(screen.getByRole('heading', { name: 'Transmission Customization', level: 3 })).toBeInTheDocument();
    const link = screen.getByRole('link', { name: 'Explore Giulia and Stelvio transmission customization' });
    const section = screen.getByRole('region', { name: 'Transmission Customization for Alfa Romeo Giulia and Stelvio' });

    expect(link).toHaveAttribute('href', `#${section.id}`);
    expect(within(section).getByRole('heading', { name: '8HP50 and 8HP75 Compatibility', level: 3 })).toBeInTheDocument();
    expect(within(section).getByRole('heading', { name: 'Launch Control and GTAm-related Software Options', level: 3 })).toBeInTheDocument();
    expect(within(section).getByRole('heading', { name: 'Customization Is Not a Fault Repair', level: 3 })).toBeInTheDocument();
    expect(within(section).getByText(/Do not assume a faster shift time/)).toBeInTheDocument();
});

test('provides transmission contact, related engine tuning, and setup actions', () => {
    renderProduct();
    const section = screen.getByRole('region', { name: 'Transmission Customization for Alfa Romeo Giulia and Stelvio' });

    expect(within(section).getByRole('link', { name: 'Discuss Your Transmission Update' })).toHaveAttribute('href', `mailto:${CONTACT_EMAIL}`);
    expect(within(section).getByRole('link', { name: 'Giulia and Stelvio engine tuning guidance' })).toHaveAttribute('href', '#engine-tuning');
    expect(within(section).getByRole('link', { name: 'Review the Flashing Setup Guide' })).toHaveAttribute('href', '#setup-guide');
});

test('links the ABS card to software-only customisation and retained driving-aid guidance', () => {
    renderProduct();

    expect(screen.getByRole('heading', { name: 'ABS Customisation', level: 3 })).toBeInTheDocument();
    const link = screen.getByRole('link', { name: 'Explore Giulia and Stelvio ABS customisation' });
    const section = screen.getByRole('region', { name: 'ABS Customisation for Alfa Romeo Giulia and Stelvio' });

    expect(link).toHaveAttribute('href', `#${section.id}`);
    expect(within(section).getByText(/across all engine variants and driving modes/)).toBeInTheDocument();
    expect(within(section).getByRole('heading', { name: 'Our Software-only Solution', level: 3 })).toBeInTheDocument();
    expect(within(section).getByText(/not an added CAN filter/)).toBeInTheDocument();
    expect(within(section).getByText(/ABS braking, traction control, and ESC remain operational after the tune/)).toBeInTheDocument();
    expect(within(section).getByText(/does not add driving aids to modes where they are already disabled/)).toBeInTheDocument();
});

test('provides the ABS background source, contact, and related engine tuning links', () => {
    renderProduct();
    const section = screen.getByRole('region', { name: 'ABS Customisation for Alfa Romeo Giulia and Stelvio' });

    expect(within(section).getByRole('link', { name: /Squadra Tuning's Quadrifoglio torque-reduction investigation/ })).toHaveAttribute('href', 'https://squadra-tuning.com/quadrifoglio-torque-reduction/');
    expect(within(section).getByRole('link', { name: 'Discuss Your ABS Customisation' })).toHaveAttribute('href', `mailto:${CONTACT_EMAIL}`);
    expect(within(section).getByRole('link', { name: 'Review Related Engine Tuning' })).toHaveAttribute('href', '#engine-tuning');
});

test('describes BCM virgin-state cleaning and the need for vehicle adaptation', () => {
    renderProduct();

    expect(screen.getByRole('heading', { name: 'Module Reset', level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/BCM \(Body Computer Module\) cleaning to a virgin state for adaptation to another vehicle/)).toBeInTheDocument();
    expect(screen.getByText(/the customer must write the new VIN code, write the vehicle's PROXI configuration, and transfer the secret keys from RFHUB to BCM using the vehicle's PIN/)).toBeInTheDocument();
    expect(screen.getByText(/cleaning alone does not complete vehicle configuration/)).toBeInTheDocument();
});
