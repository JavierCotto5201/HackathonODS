import React from 'react'
import { Container, Grid, Button ,Card, Typography, IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import './Curso_style.css';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import {Clases} from './Clases.js'
const useStyles = makeStyles({
    page: {
        
    },
    
})

function Curso({curso}){
    return (
        <div >
            <Card elevation={3} style={{backgroundColor: '#6acc3d', height: 300}}>
                <CardHeader
                    title={curso.name}
                    subheader={curso.departamento}
                    action={
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                        }
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {curso.descripcion}
                    </Typography>
                    <Link to={`/clase/${curso.id}`}>
                        <Button onClick={() =>console.log('Boton')} className="SeeClassBtn">
                            Ver Curso
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
function Cursos() {
    const classes = useStyles()
    return (
        <Container className={classes.page} style={{marginTop: 20}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    Clases.map(curso => {
                        return (
                            <Grid key={curso.id} item xs={12} md={6} lg={4}>
                                <Curso curso={curso}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default Cursos
