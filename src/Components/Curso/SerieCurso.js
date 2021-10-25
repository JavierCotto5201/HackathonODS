import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './Curso_style.css';
import Typography from '@mui/material/Typography';
import {Container, Grid} from '@mui/material';
import imagen from './video.png'
import { useHistory } from 'react-router-dom';

function Caps({episodios}){
    const history = useHistory();
    const handleClick = (data) => {
        history.push({
          pathname: `/temporada/${data.id}`,
          state: data
        });
      }
    return(
        <div>
            {console.log(episodios)}
            <Grid container spacing={3} style={{marginTop: 10}}>{
                episodios.map(function(episodio){
                    return(
                        <Grid item xs={4}>
                            <Card sx={{ width: 300, height: 350}} style={{backgroundColor: '#c9ffb0', alignItems: "center", justifyContent: "center", display: 'grid'}}>
                                <CardMedia
                                component="img"
                                height="140"
                                image={imagen}
                                alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {episodio.cap}
                                    </Typography>
                                </CardContent>
                                <Button  onClick={() =>handleClick(episodio)} variant="outlined" style={{width: "75%", marginLeft: 35, marginBottom:20}} className="SeeVideoBtn">Ver Capitulo</Button>
                            </Card>
                        </Grid>
                    )
                })
            }</Grid>
        </div>
    )
}

function Serie(props) {
    return (
    <Container>
        <Caps episodios={props.location.state}/>
    </Container>
    )
}

export default Serie