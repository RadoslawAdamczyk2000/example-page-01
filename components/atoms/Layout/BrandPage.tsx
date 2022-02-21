import Image from 'next/image'
import React from 'react'
import { brand } from '../../../data/menu'
import BrandPageWrapper from './styles/BrandPageWrapper'
const BrandPage = () => {
    return(
        <BrandPageWrapper>
            <figure>
                <Image 
                    src={brand.logo} 
                    alt={`${brand.title} logo`} 
                    layout='intrinsic'
                />
            </figure>
            <p>
                {brand.title}
            </p>
        </BrandPageWrapper>
    )
}
export default BrandPage;