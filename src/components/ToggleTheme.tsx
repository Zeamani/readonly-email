import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleTheme: React.FC = () => {
    return (
        <ThemeContext.Consumer>
            {value => (
                <div 
                    className="toggle-theme" 
                    onClick={() => {
                        if (value?.theme === 'dark') value?.setTheme('light')
                        else value?.setTheme('dark');
                    }}
                >
                    <FontAwesomeIcon className="toggle-theme__icon" icon={faSun} />
                    <FontAwesomeIcon className="toggle-theme__icon" icon={faMoon} />
                    <div className={`toggle-theme__cursor ${value?.theme}`}></div>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}

export default ToggleTheme;