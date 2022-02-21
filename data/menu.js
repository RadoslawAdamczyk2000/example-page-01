import React from 'react';
import {RiHomeLine,RiUser6Line,RiNewspaperLine,RiBookReadLine,RiProjectorLine,RiContactsLine,RiFacebookLine,RiInstagramLine,RiYoutubeFill} from 'react-icons/ri';
import brandImage from '../assets/camera.png';

const author = {
    name:'RadWEB | Radosław Adamczyk',
    path:'https://rad-web.vercel.app'
}

const brand = {
    logo:brandImage,
    path:'/',
    title:'Example name'
}

const menu = [
    {
        icon:<RiHomeLine/>,
        path:{
            de:'/',
            es:'/',
            en:'/',
            fr:'/',
            it:'/',
            pl:'/',
            ru:'/'
        },
        title:{
            de:'zuhause',
            es:'casa',
            en:'home',
            fr:'domicile',
            it:'casa',
            pl:'start',
            ru:'Начинать'
        },
    },
    {
        icon:<RiUser6Line/>,
        path:{
            de:'/uber-mich',
            es:'/sobre-mí',
            en:'/about-me',
            fr:'/oh-minie',
            it:'/oh-me',
            pl:'/o-mnie',
            ru:'/о-мни'
        },
        title:{
            de:'Über mich',
            es:'Sobre mí',
            en:'About me',
            fr:'Oh minie',
            it:'Oh me',
            pl:'O mnie',
            ru:'Обо мне'
        },
    },
    {
        icon:<RiNewspaperLine/>,
        path:{
            de:'/angebot',
            es:'/oferta',
            en:'/offer',
            fr:'/offrir',
            it:'/offerta',
            pl:'/oferta',
            ru:'/предложение'
        },
        title:{
            de:'Angebot',
            es:'Oferta',
            en:'Offer',
            fr:'Offrir',
            it:'Offerta',
            pl:'Oferta',
            ru:'Предложение'
        },
    },
    {
        icon:<RiBookReadLine/>,
        path:{
            de:'/blog',
            es:'/blog',
            en:'/blog',
            fr:'/blog',
            it:'/blog',
            pl:'/blog',
            ru:'/блог'
        },
        title:{
            de:'Blog',
            es:'Blog',
            en:'Blog',
            fr:'Blog',
            it:'Blog',
            pl:'Blog',
            ru:'Блог'
        },
    },
    {
        icon:<RiProjectorLine/>,
        path:{
            de:'/erkenntnisse',
            es:'/realizaciones',
            en:'/realizations',
            fr:'/réalisations',
            it:'/realizzazioni',
            pl:'/realizacje',
            ru:'/реализации'
        },
        title:{
            de:'Erkenntnisse',
            es:'Realizaciones',
            en:'Realizations',
            fr:'Réalisations',
            it:'Realizzazioni',
            pl:'Realizacje',
            ru:'реализации'
        },
    },
    {
        icon:<RiContactsLine/>,
        path:{
            de:'/kontakt',
            es:'/contacto',
            en:'/contact',
            fr:'/contact',
            it:'/contatto',
            pl:'/kontakt',
            ru:'/контакт'
        },
        title:{
            de:'Kontakt',
            es:'Contacto',
            en:'Contact',
            fr:'Contact',
            it:'Contatto',
            pl:'Kontakt',
            ru:'контакт'
        },
    },
]
const socials = [
    {
        icon:<RiFacebookLine/>,
        name:'Facebook',
        path:'#'
    },
    {
        icon:<RiInstagramLine/>,
        name:'Instagram',
        path:'#'
    },
    {
        icon:<RiYoutubeFill/>,
        name:'YouTube',
        path:'#'
    },
]

export {author,brand,menu,socials};