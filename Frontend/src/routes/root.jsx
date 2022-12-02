import {NavLink, Outlet} from "react-router-dom";
import {Container} from "@mui/material";

const Root = () => {
    let activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold',
        color: 'red'
    };
    return (
        <Container maxWidth="xl">
            <div>
                <NavLink to="/my-collections" style={({isActive}) =>
                    isActive ? activeStyle : undefined
                }>My Collections</NavLink>
                <NavLink to="/" style={({isActive}) =>
                    isActive ? activeStyle : undefined
                }>Search</NavLink>
            </div>
            <Outlet/>
        </Container>
    )
}

export default Root;