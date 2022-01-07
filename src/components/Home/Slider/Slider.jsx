import { useState } from 'react'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { Container, Arrow, Wrapper, Slide, ImgContainer, Image, InfoContainer, Description, Button, Title } from "./SliderStyle"
import { sliderData } from '../../../helpers/sliderData'


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handlerClick = (dir) => {
        if (dir === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => { handlerClick("left") }}>
                <ArrowBackIosOutlined />
            </Arrow >
            <Wrapper slideindex={slideIndex}>
                {sliderData.map(item => (
                    <Slide key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button to={item.path}>{item.button}</Button>
                        </InfoContainer>
                    </Slide>

                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => { handlerClick("right") }}>
                <ArrowForwardIosOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
