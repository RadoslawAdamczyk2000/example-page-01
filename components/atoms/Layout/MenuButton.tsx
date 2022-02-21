import React from 'react';
interface ImenuButton {
    behave : Function,
    isActive : boolean
}
const MenuButton = ({behave,isActive}:ImenuButton) => {
    return(
        <button onClick={behave} isActive={isActive}>
            <span/>
            <span/>
            <span/>
        </button>
    )
}
export default MenuButton;