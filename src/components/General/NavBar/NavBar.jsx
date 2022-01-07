
import { Badge } from '@material-ui/core';
import { ExitToAppOutlined, LocalMallOutlined } from '@material-ui/icons';
import { useState } from 'react'
import SideMenu from '../SideMenu/SideMenu';
import { Center, Container, Left, Logo, Menu, Right, Wrapper, Log, Cart } from './NavBarStyle'

const NavBar = () => {
    const [sideMenu, setSideMenu] = useState(false);

    const sideMenuHandler = () => {
        setSideMenu(!sideMenu)
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    {!sideMenu && <Menu onClick={sideMenuHandler} />}

                    <SideMenu handler={sideMenuHandler} sidemenu={sideMenu} />
                </Left>
                <Center>
                    <Logo to={`/`}><h1>FD STORE</h1></Logo>
                </Center>
                <Right>
                    <Log to={`/login`}><h2>INGRESA</h2> <ExitToAppOutlined /></Log>
                    <Cart to={`/cart`}>
                        <Badge badgeContent={5}>
                            <LocalMallOutlined />
                        </Badge>
                    </Cart>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
