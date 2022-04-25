import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Logo: React.FC = () => {
    return (
        <span className='logo'><FontAwesomeIcon icon={faEnvelope} /> My-Mail</span>
    );
}

export default Logo;