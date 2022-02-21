import styled from 'styled-components';
const MenuItemWrapper = styled.a`
    color:white;
    font-size:1.9rem;
    overflow:hidden;
    padding:.25rem .5rem;
    position:relative;
    text-transform:capitalize;
    &::before{
        background-color:white;
        bottom:0;
        height:.2rem;
        left:-110%;
        transition:.12s linear transform;
        width:100%;
    }
    &:hover::before{
        transform:translateX(110%);
    }
`
export default MenuItemWrapper;