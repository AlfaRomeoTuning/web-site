import { useEffect, useRef, useState } from 'react';
import './Lightbox.css';

// Fullscreen image viewer with zoom toggle, keyboard + click-to-close support.
// Pass onPrev/onNext to step through a gallery with buttons or arrow keys.
export default function Lightbox({ image, onClose, onPrev, onNext }) {
    const [zoomed, setZoomed] = useState(false);
    const closeRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
                return;
            }

            if (e.key === 'ArrowLeft' && onPrev) {
                onPrev();
                return;
            }

            if (e.key === 'ArrowRight' && onNext) {
                onNext();
                return;
            }

            if (e.key === 'Tab' && contentRef.current) {
                const focusable = contentRef.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );

                if (!focusable.length) {
                    return;
                }

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', onKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        if (closeRef.current) closeRef.current.focus();
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose, onPrev, onNext]);

    useEffect(() => setZoomed(false), [image.src]);

    return (
        <div
            className="lightbox-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={image.alt || 'Enlarged image'}
            onClick={onClose}
        >
            <div className={`lightbox-content ${onPrev || onNext ? 'lightbox-content-gallery' : ''}`} onClick={(e) => e.stopPropagation()} ref={contentRef}>
                <button
                    type="button"
                    className="lightbox-close"
                    onClick={onClose}
                    aria-label="Close image viewer"
                    ref={closeRef}
                >
                    &times;
                </button>
                <img
                    src={image.src}
                    alt={image.alt}
                    className={`lightbox-image ${zoomed ? 'zoomed' : ''}`}
                    onClick={() => setZoomed((z) => !z)}
                />
                {image.caption && <p className="lightbox-caption">{image.caption}</p>}
                {(onPrev || onNext) && (
                    <div className="lightbox-nav">
                        <button type="button" onClick={onPrev} disabled={!onPrev} aria-label="Previous image">&larr;</button>
                        <button type="button" onClick={onNext} disabled={!onNext} aria-label="Next image">&rarr;</button>
                    </div>
                )}
                <p className="lightbox-hint">{zoomed ? 'Click image to zoom out' : 'Click image to zoom in'}</p>
            </div>
        </div>
    );
}
