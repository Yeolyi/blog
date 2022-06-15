import NavBar from "./nav/NavBar"
import Logo from "./logo/Logo"
import "./NavHeader.css"
import { Outlet } from "react-router"
import Container from "../container/Container"

export default function NavHeader() {
    return <>
        <header>
            <Logo />
            <NavBar />
        </header>
        <Container>
            <Outlet />
        </Container>
    </>
}
