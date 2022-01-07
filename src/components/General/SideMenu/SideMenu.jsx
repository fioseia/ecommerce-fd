import { CloseRounded, Instagram, WhatsApp } from "@material-ui/icons"
import { Close, Container, Wrapper, Item, SocialLink, SocialWraper } from "./SideMenuStyle"

import { useContext } from 'react'
import { ProductsContext } from "../../../context/ProductsContext"


const SideMenu = ({ handler, sidemenu }) => {
    const { categories } = useContext(ProductsContext)

    return (
        <>
            <Container show={sidemenu ? '0' : '-100%'}>
                <Close onClick={handler}>
                    <CloseRounded />
                </Close>
                <Wrapper>
                    {categories.map((item) => (
                        <Item to={item.path} key={item.id} onClick={handler}>
                            {item.title}
                        </Item>
                    ))}
                </Wrapper>
                <Item to={`/preguntasfrecuentes`} onClick={handler}>
                    PREGUNTAS FRECUENTES
                </Item>
                <SocialWraper onClick={handler}>
                    <SocialLink href={'https://www.instagram.com/efede_store/?hl=es'}><Instagram /></SocialLink>
                    <SocialLink href={'#'}><WhatsApp /></SocialLink>
                </SocialWraper>
            </Container>
        </>
    )
}

export default SideMenu;
