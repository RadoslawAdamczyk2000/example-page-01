import React from 'react';
import BrandPage from '../../atoms/Layout/BrandPage';
import MenuButton from '../../atoms/Layout/MenuButton';
import BrandWrapper from './styles/BrandWrapper';
const Brand = () => {
    return(
        <BrandWrapper>
            <BrandPage/>
            {/* <MenuButton/> */}
        </BrandWrapper>
    )
}
export default Brand;