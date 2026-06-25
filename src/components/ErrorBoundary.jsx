import React from 'react';
import { Link } from 'react-router-dom';

// Catches render-time errors anywhere in the tree and shows a friendly
// fallback instead of a blank white screen.
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // eslint-disable-next-line no-console
        console.error('Unhandled UI error:', error, info);
    }

    handleReset = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div
                    role="alert"
                    style={{
                        minHeight: '60vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '2rem',
                        gap: '1rem',
                    }}
                >
                    <h1>Something went wrong</h1>
                    <p>An unexpected error occurred. Please try again.</p>
                    <Link to="/" className="btn btn-primary" onClick={this.handleReset}>
                        Back to home
                    </Link>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
