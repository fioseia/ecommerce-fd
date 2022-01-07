import { Email, Instagram, Phone, WhatsApp } from '@material-ui/icons'
import React from 'react'
import { SocialLink, SocialWraper } from '../SideMenu/SideMenuStyle'
import { Center, ContactItem, Container, Desc, Left, List, ListItem, Logo, Right, Title } from './FooterStyle'

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo to={`/`} ><h1>FD STORE</h1></Logo>
                <Desc>
                    Prendas 100% de lino creadas con amor especialmente para vos.
                </Desc>
                <SocialWraper>
                    <SocialLink href={'https://www.instagram.com/efede_store/?hl=es'}><Instagram /></SocialLink>
                    <SocialLink href={'#'}><WhatsApp /></SocialLink>
                </SocialWraper>
            </Left>
            <Center>
                <Title>CONTENIDO</Title>
                <List>
                    <ListItem to={`/`}>Home</ListItem>
                    <ListItem to={`/categoria/vertodo`}>Nuestros productos</ListItem>
                    <ListItem to={`/`}>Carrito</ListItem>
                    <ListItem to={`/`}>Ingresá</ListItem>
                    <ListItem to={`/`}>Registrate</ListItem>
                </List>
            </Center>
            <Right>
                <Title>CONTACTO</Title>
                <ContactItem>
                    <Phone style={{ marginRight: '10px' }} />
                    +54 9 351 5051324
                </ContactItem>
                <ContactItem>
                    <Email style={{ marginRight: '10px' }} />
                    holafdstore@gmail.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
