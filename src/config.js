// Centralized site-wide configuration.
// Keep absolute URLs and contact details in one place so they are easy to
// update and stay consistent across pages and structured data.

export const BASE_URL = 'https://alfatuning.app';

export const CONTACT_EMAIL = 'info@alfatuning.app';
export const INSTAGRAM_HANDLE = 'alfatuning.app';
export const INSTAGRAM_URL = 'https://www.instagram.com/alfatuning.app';

// Build an absolute URL from a site-relative path.
export const absoluteUrl = (path = '') =>
    `${BASE_URL}${path.startsWith('/') || path === '' ? path : `/${path}`}`;
