import React, {useEffect, useState} from "react";
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link} from "react-router-dom";
import {ProductCard} from "../ProductCard/ProductCard"
import {useSelector} from "react-redux";

const DiscoverPlant = () => {
    const items = useSelector((state) => state.plants.store)
    const [plantCareDifficulty, setPlantCareDifficulty] = useState("VERY_EASY")
    const [plantSize, setPlantSize] = useState("SMALL")
    const [plantTypeOfLight, setPlantTypeOfLight] = useState("DIRECT")

    const [filteredItems, setFilteredItems] = useState(items)

    useEffect(() => {

        setFilteredItems(items.filter(el => {
            return el?.typeOfLight.toUpperCase() === plantTypeOfLight && el?.size.toUpperCase() === plantSize && el?.difficulty.toUpperCase() === plantCareDifficulty
        }))

    }, [plantCareDifficulty, plantSize, plantTypeOfLight])


    return (
        <Container maxWidth="xl">
            <Box sx={{width: "100%"}}>
                <Typography style={{margin: "20px 0"}} variant='h4'>Odkryj roślinę</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box style={{
                            minHeight: "400px",
                            backgroundColor: "#0a5c5c",
                            minWidth: "300px",
                            width: "calc(100% - 80px)",
                            padding: "40px"
                        }}>
                            <Typography style={{color: "white"}} variant='h5'>Jakie światło?</Typography>
                            <FormControl size="small">
                                {/*<InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
                                <Select
                                    style={{
                                        backgroundColor: "white", width: "150px", margin: "10px 0",
                                        border: "none", borderRadius: "30px"
                                    }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={plantTypeOfLight}
                                    label="Age"
                                    onChange={(e) => setPlantTypeOfLight(e.target.value)}
                                >
                                    <MenuItem value={"DIRECT"}>Cały dzień</MenuItem>
                                    <MenuItem value={"DIFFUSED"}>Po południu</MenuItem>
                                    <MenuItem value={"SHADOW"}>Rano</MenuItem>

                                </Select>
                            </FormControl>

                            <Typography style={{color: "white"}} variant='h5'>Łatwość</Typography>
                            <FormControl size="small">
                                {/*<InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
                                <Select
                                    style={{
                                        backgroundColor: "white", width: "300px", margin: "10px 0",
                                        border: "none", borderRadius: "30px"
                                    }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={plantCareDifficulty}
                                    label="Age"
                                    onChange={(e) => setPlantCareDifficulty(e.target.value)}
                                >
                                    <MenuItem value={"VERY_EASY"}>Nie do zdarcia</MenuItem>
                                    <MenuItem value={"EASY"}>Ja wyjedziesz na urlop to przeżyje</MenuItem>
                                    <MenuItem value={"MEDIUM"}>Trzeba dbać</MenuItem>
                                    <MenuItem value={"HARD"}>Aspirujący botanik </MenuItem>
                                    <MenuItem value={"VERY_HARD"}>Botanik</MenuItem>
                                </Select>
                            </FormControl>

                            <Typography style={{color: "white"}} variant='h5'>Jaki rozmiar?</Typography>
                            <FormControl size="small">
                                {/*<InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
                                <Select
                                    style={{
                                        backgroundColor: "white", width: "150px", margin: "10px 0",
                                        border: "none", borderRadius: "30px"
                                    }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={plantSize}
                                    label="Age"
                                    onChange={(e) => setPlantSize(e.target.value)}
                                >
                                    <MenuItem value={"SMALL"}>Mały</MenuItem>
                                    <MenuItem value={"MEDIUM"}>Średni</MenuItem>
                                    <MenuItem value={"BIG"}>Duży</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xd={12} md={8}>
                        <Box style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
                            {filteredItems.map((el, id) => {
                                return <Link to={`/sklep/${id}`}> <ProductCard key={id} size="sm" price={el.price}
                                                                               name={el.name}/> </Link>;
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default DiscoverPlant;
