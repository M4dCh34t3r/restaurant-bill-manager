import { NavbarLink, NavbarLogo, NavbarWrapper } from "./navbar.style";

export default function Navbar() {
    return(
        <NavbarWrapper>

            <NavbarLogo src="./logo.svg" alt="logo"/>
            <NavbarLink to="/opt0"> OPTION 0 </NavbarLink>
            <NavbarLink to="/opt1"> OPTION 1 </NavbarLink>
            <NavbarLink to="/opt2"> OPTION 2 </NavbarLink>
            <NavbarLink to="/opt3"> OPTION 3 </NavbarLink>

        </NavbarWrapper>
    );
}
