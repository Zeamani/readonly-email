import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import ToggleTheme from './ToggleTheme';

const LettersExtraMenu: React.FC = () => {
    const [extraMenuActive, setExtraMenuActive] = useState(true);

    useEffect(() => {
        const extraMenuCloseHandler = (e: MouseEvent) => {
            if (!(e.target as Element).closest(".extra-menu")) setExtraMenuActive(false);
        }

        document.addEventListener("mousemove", extraMenuCloseHandler);

        return () => document.removeEventListener("mousemove", extraMenuCloseHandler);
    }, []);

    return (
        <div className={(extraMenuActive) ? "letters__extra-menu extra-menu active" : "letters__extra-menu extra-menu"}>
            <div className="extra-menu__icon-wrap" onClick={() => setExtraMenuActive(!extraMenuActive)}>
                <FontAwesomeIcon className="extra-menu__icon" icon={faEllipsisVertical}/>
            </div>
            <div className="extra-menu__body">
                <div className="extra-menu__item"><ToggleTheme></ToggleTheme><span>Тема</span></div>
                
            </div>
        </div>
    );   
}

export default LettersExtraMenu; 