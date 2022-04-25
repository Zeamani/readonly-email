import React from 'react';
import { useActions } from '../hooks/redux';
import { Letter } from '../types/letters';

const LettersListItem: React.FC<{letterItem: Letter, isSearchList?: boolean}> = ({ letterItem, isSearchList }) => {
    const { openLetters, addSelectedLetters, removeSelectedLetters } = useActions();

    return (
        <tr className="letters__item letters-item" onClick={() => openLetters(letterItem)}>
            {isSearchList ||
                <td className="letters-item__checkbox" onClick={e => e.stopPropagation()}>
                    <input 
                        className="letters-item__checkbox-input" 
                        type="checkbox" 
                        id={`letter-checkbox-${letterItem.id}`} 
                        onChange={(e) => {
                            if (e.target.checked) addSelectedLetters(letterItem.id)
                            else removeSelectedLetters(letterItem.id); 
                        }}
                    />
                    <label className="letters-item__checkbox-wrap" htmlFor={`letter-checkbox-${letterItem.id}`} ></label>
                </td>
            }
            <td className="letters-item__name"><b>{letterItem.name}</b></td>
            {isSearchList || 
                <td className="letters-item__content">
                    <div><b>{letterItem.theme}</b><span>{` - ${letterItem.textLetter}`}</span></div>
                </td>
            }
            <td className="letters-item__date"><b>{letterItem.date}</b></td>
        </tr>              
    );
}

export default LettersListItem;