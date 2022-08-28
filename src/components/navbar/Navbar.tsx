import { NavbarLink, NavbarLogo, NavbarWrapper } from "./navbar.style";

export default function Navbar() {
    return(
        <NavbarWrapper>

            <NavbarLogo src="./logo.svg" alt="logo"/>
            <NavbarLink to="/bills"> BILLS </NavbarLink>
            <NavbarLink to="/items"> ITEMS </NavbarLink>

        </NavbarWrapper>
    );
}
