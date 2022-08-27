import { Link } from "react-router-dom";
import styled from 'styled-components';

export const NavbarLink = styled(Link)`
    background: linear-gradient(#ffffff, #ffffff) bottom / 0 0.125rem no-repeat;
    transition: 0.25s ease-in-out;
    font-family: 'Lucida Sans';
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    padding: 0.25rem;
    font-size: 1rem;
    
    &:hover {
        background-size: 100% 0.125rem;
    }
`;

export const NavbarLogo = styled('img')`
    height: 100%;
`;

export const NavbarWrapper = styled('div')`
    justify-content: space-evenly;
    background-color: #000000;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    display: flex;
    height: 10rem;
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 0;
`; 
