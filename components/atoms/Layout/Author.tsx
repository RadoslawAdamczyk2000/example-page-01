import React from 'react';
import { author } from '../../../data/menu';
const Author = () => {
    const year = new Date().getFullYear();
    return(
        <div>
            <a 
                href={author.path} 
                title={author.name} 
                target='_blank' 
                rel='index follow noreferrer'
            >
                {author.name} &copy; {year}
            </a>
        </div>
    )
}
export default Author;