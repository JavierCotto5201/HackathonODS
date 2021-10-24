import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Container, Grid} from '@mui/material';
import imagen from './video.png'

const capitulosDis = ["Capitulo 1: Proposiciones Matematicas", "Capitulo 2: Argumentos",
 "Capitulo 3: Tecnicas de Demostración: Parte 1", "Capitulo 4: Tecnicas de Demostración: Parte 2",
"Capitulo 5: Invariantes e Inducción Matematica"]

const linksDis = ["https://drive.google.com/file/d/13pwGjdfbj-ls6T9EK3Xk2nN843ALsXuV/view?usp=sharing",
    "https://drive.google.com/file/d/1GudV5FiPGp5mXGaD_-WI007cybndnIuA/view?usp=sharing",
    "https://drive.google.com/file/d/1Qomz0eO1cWeQyTrkZLf7AsSRTDK-m0BC/view?usp=sharing",
    "https://drive.google.com/file/d/1wJ__qMFH_dBpFMEeX4CostuZv6FM6-nj/view?usp=sharing",
    "https://drive.google.com/file/d/1TVkro8MZCY9-oFPUUdFPytvS-YxmRZ_G/view?usp=sharing"]

const capitulosGra = ["Capitulo 1: Framebuffer", "Capitulo 2: Mapas de Bits", "Capitulo 3: Historia de los videojuegos"]

const linksGra = ["https://youtu.be/DnGe4AbpQQg", "https://youtu.be/gwax1vtxaTM", "https://youtu.be/8XTPIY4BEL0"]

const capitulosFis = ["Fuerza Fundamentales", "Carga Electrica", "Campo Electrico", "Electric Field Ring"]

const linksFis = ["https://youtu.be/PtUU7fnxRqo", "https://youtu.be/zu3wL2el5Lc", "https://youtu.be/0KDehyJouIk", "https://youtu.be/g9iS3daBnA0"]

function Caps(){
    return(
        <div>
            <Grid container spacing={3} style={{marginTop: 10}}>{
                capitulosDis.map(function(Capitulos){
                    return(
                            <Grid item xs={4}>
                            <Card sx={{ maxWidth: 300, maxHeight: 350}}>
                                <CardMedia
                                component="img"
                                height="140"
                                image={imagen}
                                alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {Capitulos}
                                    </Typography>
                                </CardContent>
                                <Button variant="outlined">Ver Capitulo</Button>
                            </Card>
                            </Grid>
                    )
                })
            }</Grid>
        </div>
    )
}

function Serie() {
    return (
    <Container>
        <Caps/>
    </Container>
    )
}

export default Serie