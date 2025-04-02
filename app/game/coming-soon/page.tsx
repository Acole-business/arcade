import React from 'react';

const ComingSoonPage: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Coming Soon</h1>
            <p style={styles.subtitle}>We&apos;re working hard to bring this game to you. Stay tuned!</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        textAlign: 'center' as const,
    },
    title: {
        fontSize: '3rem',
        fontWeight: 'bold' as const,
        color: '#333',
    },
    subtitle: {
        fontSize: '1.5rem',
        color: '#666',
    },
};

export default ComingSoonPage;