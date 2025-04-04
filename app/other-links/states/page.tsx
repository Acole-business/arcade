import React from 'react';

const Page: React.FC = () => {
    return (
        <div>
            <iframe
                src="https://www.statbotics.io/"
                width="100%"
                height="500px"
                style={{ border: 'none' }}
                title="Example Iframe"
            ></iframe>
        </div>
    );
};

export default Page;