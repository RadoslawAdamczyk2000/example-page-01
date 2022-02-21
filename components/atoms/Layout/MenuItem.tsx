import Link from 'next/link';
import React from 'react';
import MenuItemWrapper from './styles/MenuItemWrapper';
interface ImenuItem {
    icon ?: any,
    path : string,
    title : string
}
const MenuItem = ({icon,path,title}:ImenuItem) => {
    return(
        <Link href={path}>
            <MenuItemWrapper>
                {
                    icon ?
                    <>
                        <span className='icon'>
                            {icon}
                        </span>
                        <span className='title'>
                            {title}
                        </span>
                    </> :
                    <>
                        <span className='title'>
                            {title}
                        </span>
                    </>
                }
            </MenuItemWrapper>
        </Link>
    )
}
export default MenuItem;