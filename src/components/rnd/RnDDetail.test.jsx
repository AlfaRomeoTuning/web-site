import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import RnDDetail from './RnDDetail';

test('shows the not-found screen for an unknown slug', () => {
    render(
        <MemoryRouter initialEntries={['/rnd/no-such-part']}>
            <Routes>
                <Route path="/rnd/:slug" element={<RnDDetail />} />
            </Routes>
        </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: '404: Page not found', level: 1 })).toBeInTheDocument();
});
