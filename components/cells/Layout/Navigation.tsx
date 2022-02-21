import React from 'react';
import Brand from '../../bacterias/Layout/Brand';
import Menu from '../../bacterias/Layout/Menu';
import NavigationWrapper from './styles/NavigationWrapper';
const Navigation = () => {
    return(
        <NavigationWrapper>
            <Brand/>
            <Menu/>
        </NavigationWrapper>
    )
}
export default Navigation;
