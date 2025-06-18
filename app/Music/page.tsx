import React from 'react';
// This page is a placeholder for the Music section of the website.
const pageStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    color: '#222',
    fontFamily: 'Segoe UI, Arial, sans-serif',
};

const cardStyles: React.CSSProperties = {
    background: 'rgba(255,255,255,0.85)',
    borderRadius: '16px',
    padding: '2rem 3rem',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    textAlign: 'center',
    maxWidth: '400px',
};

const headingStyles: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    letterSpacing: '1px',
};

const subTextStyles: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '2rem',
};

const emailStyles: React.CSSProperties = {
    fontSize: '1rem',
    color: '#0078d4',
    textDecoration: 'underline',
    cursor: 'pointer',
};

export default function MusicPage() {
    return (
        <div style={pageStyles}>
            <div style={cardStyles}>
                <div style={headingStyles}>🚧 Under Construction 🚧</div>
                <div style={subTextStyles}>
                    The Music page is coming soon.<br />
                    Stay tuned for updates!
                </div>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Info%20&to=Music@arrowcole.xyz" style={emailStyles}>
                    Questions? Email Music@arrowcole.xyz
                </a>
            </div>
        </div>
    );
}