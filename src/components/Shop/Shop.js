import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Photo from "../../img/photo.jpg";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {ProductCard} from '../ProductCard/ProductCard.js';
import Slider from '@mui/material/Slider';


function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 0;
const Shop = () => {
    const [value1, setValue1] = React.useState([0, 50]);
    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));
    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <Container maxWidth="xl">

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        {/*<Item>xs=8</Item>*/}
                        <h2>Sortuj</h2>
                        <p>Cena</p>
                        <p>od {value1[0]} do  {value1[1]} zł</p>
                        <Slider
                            sx = {{color : "#7a7a7a" , maxWidth : "150px"}}
                            getAriaLabel={() => 'Minimum distance'}
                            value={value1}
                            max={150}
                            onChange={handleChange1}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            disableSwap
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <h2>Produkty</h2>
                        <Box sx = {{display : "flex" , flexWrap : "wrap"  , gap : "50px" }} spacing={5}>

                        <ProductCard name="Kaktus" description={"lorem ipsum"} size = "sm" price = {123} />
                        <ProductCard name="Kaktus" description={"lorem ipsum"} size = "sm" price = {123} />
                            <ProductCard name="Kaktus" description={"lorem ipsum"} size = "sm" price = {123} />
                            <ProductCard name="Kaktus" description={"lorem ipsum"} size = "sm" price = {123} />
                            <ProductCard name="Kaktus" description={"lorem ipsum"} size = "sm" price = {123} />
                            <ProductCard name="Kaktus" description={"lorem ipsum"} size = "sm" price = {123} />
                            <ProductCard name="Kaktus" description={"lorem ipsum"} size = "sm" price = {123} />

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Shop;