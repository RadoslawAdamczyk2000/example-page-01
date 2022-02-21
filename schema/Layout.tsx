import React from 'react'
import Global from '../styles/Global';
import Seo from '../components/atoms/Layout/Seo';
import Navigation from '../components/cells/Layout/Navigation';
import Footer from '../components/cells/Layout/Footer';
const Layout = ({children}:{children:any}) => {
    return(
        <div>
            <Seo
                title='Przykładowa strona fotografa'
            />
            <Global/>
            <Navigation/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
export default Layout;