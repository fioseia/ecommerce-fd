
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core"
import { AddContainer, AddButton, Color, ColorContainer, Container, Filter, FilterColor, FilterContainer, FilterDescription, FilterInfoLink, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Label, MeasureContainer, MeasureValue, Price, Title, FinishButton } from "./ItemDetailStyle"
import Counter from '../../General/Counter/Counter';
import { CheckRounded, ShoppingCart } from '@material-ui/icons';
import Datalist from '../../General/Datalist/Datalist';
import { colorsData, sizesData } from '../../../helpers/filtersData';

const ItemDetail = ({
    item,
    handleChange,
    handlerColor,
    handleSize,
    handleMeasures,
    handlerClick,
    option,
    button,
    amount,
    setAmount }) => {


    return (
        <Container>
            <ImgContainer>
                <Image src={item.images[0]} />
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Price>$ {item.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Colores</FilterTitle>
                        {colorsData.map((item) => (
                            <ColorContainer key={item.id}>
                                <Label>
                                    <FilterColor type="radio" name="filter-color" value={item.title} onClick={handlerColor} />
                                    <Color color={item.code} />
                                </Label>
                            </ColorContainer>
                        ))}
                    </Filter>
                    <Filter>
                        <FormControl component="fieldset">
                            <FilterTitle>Elegí el talle:</FilterTitle>
                            <FilterDescription>Podés elegir entre nuestros talles estandares o si preferís podemos realizar tu prenda a medida!</FilterDescription>
                            <RadioGroup
                                aria-label="talle"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="nuestrosTalles" control={<Radio color='default' size="small" />} label="Nuestros talles:" onChange={handleChange} />
                                {option === 'genericos' && (
                                    <FilterSize name="standard-size" onChange={handleSize}>
                                        {sizesData.map((item) => (
                                            <FilterSizeOption key={item.id} value={item.title}>{item.title}</FilterSizeOption>
                                        ))}
                                    </FilterSize>
                                )}
                                <FilterInfoLink> Querés conocer las medidas?</FilterInfoLink>
                                <FormControlLabel value="aMedida" control={<Radio color="default" size="small" />} label="A medida:" onChange={handleChange} />
                                {(option === 'medida') &&
                                    item.measures.map((measure, index) => (
                                        <MeasureContainer key={index} >
                                            {<MeasureValue htmlFor='measure' onChange={handleMeasures}>{measure}
                                                <Datalist />
                                            </MeasureValue>}
                                        </MeasureContainer>
                                    ))
                                }
                                <FilterInfoLink>Querés saber como tomar las medidas?</FilterInfoLink>
                            </RadioGroup>
                        </FormControl>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <Counter setAmount={setAmount} amount={amount} />
                    {
                        button === 'addBtn'
                            ? <AddButton onClick={handlerClick}><span><ShoppingCart /></span>AGREGAR AL CARRITO</AddButton>
                            : <FinishButton to={'/cart'}><span><CheckRounded /> </span>VER CARRITO</FinishButton>
                    }
                </AddContainer>
            </InfoContainer>
        </Container>
    )
}

export default ItemDetail
