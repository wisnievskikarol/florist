import React , {useState} from 'react';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Photo from '../../img/photo.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import Typography from "@mui/material/Typography";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ProductView = () =>{
    const [store , setStore] = useState({title : "asd" , price : "21,12 zł" ,description : "lorem" });
    const [count , setCount] = useState(0);
    const { id } = useParams();

    const useStyles = makeStyles({
        root: {
            backgroundColor : "#0a5c5c",
            border: 0,
            borderRadius: 30,
            boxShadow: 'none',
            color: 'white',
            height: 48,
            padding: '0 30px',
            "&:hover" : {
                border: "none",
                backgroundColor : "#054949"
            },
            "&:active" : {
                border: "none",
                backgroundColor : "#054949"
            }
        },

    });
    const classes = useStyles();
    console.log(id);

        return (
            <Container maxWidth = "xl" sx = {{marginBottom : "50px"}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md = {6}>
                            <Box >
                            <Swiper
                                style={{maxHeight : "700px"}}
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                // height ={10}
                                // autoHeight ={false}
                                // navigation
                                // autoHeight = {true}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide >  <img style={{width: '100%' , height : "100%" }} src = {Photo}></img></SwiperSlide>
                                <SwiperSlide >  <img  style={{width: '100%'}} src = {Photo}></img></SwiperSlide>
                            </Swiper>
                            </Box>
                            {/*<Item>xs=8</Item>*/}
                        </Grid>
                        <Grid item xs={12} md = {6}>
                            <Box sx = {{display : "flex"  , flexDirection : "column" , justifyContent : "center" , alignItems : "flex-start"  }} >
                            <Typography sx = {{fontWeight : "medium" , fontSize : "33px"}} variant="body2" color="black">
                                Lorem ipsum
                            </Typography>
                            <Typography sx = {{fontSize : "22px" , margin : "5px 0 20px 0"}}>12,21</Typography>
                            <Typography  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </Typography>
                            <TextField sx = {{margin : "20px 0 20px 0"}} style={{width : "100px"}} id="outlined-basic" label="ilość" variant="outlined" />
                            <Stack spacing={2} direction="row" >
                                <Button className={classes.root} variant="outlined">Kup teraz</Button>
                                <Button className={classes.root} variant="outlined">Dodaj do koszyka</Button>
                            </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        );
}
export default ProductView;