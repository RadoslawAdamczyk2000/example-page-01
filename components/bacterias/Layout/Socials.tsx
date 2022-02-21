import React from 'react';
import { socials } from '../../../data/menu';
import SocialItem from '../../atoms/Layout/SocialItem';
const Socials = () => {
    return(
        <div>
            {
                socials.map( i => {
                    <SocialItem
                        icon={i.icon}
                        path={i.path}
                        title={i.title}
                    />
                })
            }
        </div>
    )
}
export default Socials;