import React from 'react'
interface IsocialItem {
    icon : any,
    path : string,
    title : string
}
const SocialItem = ({icon,path,title}:IsocialItem) => {
    return(
        <a 
            href={path} 
            target='_blank' 
            rel='follow index noreferrer'
            title={title}
        >
            {icon}
        </a>
    )
}
export default SocialItem;