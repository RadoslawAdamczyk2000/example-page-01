import styled from 'styled-components';
const BrandPageWrapper = styled.div`
    align-items:center;
    column-gap:1rem;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    height:7.5rem;
    justify-content:center;
    width:100%;
    & > figure{
        align-items:center;
        display:flex;
        filter:invert(1);
        height:7.5rem;
        justify-content:center;
        position:relative;
        width:7.5rem;
        & > img{
            height:100%;
            object-fit:contain;
            object-position:center;
            width:100%;
        }
    }
    & > p{
        align-items:center;
        display:flex;
        font-size:2.2rem;
        height:7.5rem;
        justify-content:center;
        padding:0 1.6rem;
    }
`
export default BrandPageWrapper;