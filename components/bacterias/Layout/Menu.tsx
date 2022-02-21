import React from 'react';
import { menu } from '../../../data/menu';
import MenuItem from '../../atoms/Layout/MenuItem';
import MenuWrapper from './styles/MenuWrapper';
const Menu = () => {
    const i = 1;
    return(
        <MenuWrapper>
            {
                menu.map( i => {
                    return(
                        <MenuItem
                            key={i.title.pl}
                            path={i.path.pl}
                            title={i.title.pl}
                        />
                    )
                })
            }
        </MenuWrapper>
    )
}
export default Menu;