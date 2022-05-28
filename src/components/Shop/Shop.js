import React, {useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {ProductCard} from '../ProductCard/ProductCard.js';
import Slider from '@mui/material/Slider';
import {useSelector} from 'react-redux'

import {Link} from "react-router-dom";

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 0;
const Shop = () => {
    const items = useSelector((state) => state.plants.store)
    const [value1, setValue1] = React.useState([0, 70]);
    const [plants, setPlants] = React.useState(items);

    useEffect(() => {
        if (items) {
            const temp = items.filter((el) => {
                return el.price >= value1[0] && el.price <= value1[1]
            })
            setPlants(temp)
        }

    }, [value1])

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
        <Container sx={{minHeight: "100%"}} maxWidth="xl">
            <Box sx={{flexGrow: 1, minHeight: "72vh"}}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        {/*<Item>xs=8</Item>*/}
                        <h2>Sortuj</h2>
                        <p>Cena</p>
                        <p>od {value1[0]} do {value1[1]} zł</p>
                        <Slider
                            sx={{marginLeft: "10px", color: "#7a7a7a", maxWidth: "150px"}}
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
                        <Box sx={{display: "flex", flexWrap: "wrap", gap: "50px"}} spacing={5}>
                            {plants.map((el, id) => {
                                return <Link to={`/sklep/${el.id}`}> <ProductCard img={el.imgURL} id={id} name={el.name}
                                                                                  size="sm"
                                                                                  price={el.price}/></Link>
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Shop;