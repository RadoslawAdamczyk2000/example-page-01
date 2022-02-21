import Head from 'next/head';
import React from 'react';
interface Iseo {
    description ?: string,
    noRobots ?: boolean,
    title : string
}
const Seo = ({description,title,noRobots=false} : Iseo) => {
    return(
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='robots'content={noRobots ? 'noindex nofollow' : 'index follow'}/>
            <meta name='author' content='RadWEB Radosław Adamczyk'/>
        </Head>
    )
}
export default Seo;