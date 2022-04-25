import React, { ReactChild } from 'react';
import cl from './FormButton.module.sass'

const FormButton: React.FC<{clickHandler: () => void, children: ReactChild, disabled?: boolean}> = ({clickHandler, children, disabled}) => {
    return (
        <button disabled={disabled} className={cl.formButton} onClick={clickHandler}>
            {children}
        </button>
    );
}

export default FormButton;