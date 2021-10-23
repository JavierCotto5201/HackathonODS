import React from 'react'
import { Container, Grid, Button ,Card, Typography, IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    page: {
        
    },
    
})
function Curso(curso){
    return (
        <div >
            <Card elevation={2}>
                <CardHeader
                    title={'Calculo 1'}
                    subheader={'Matematicas'}
                    action={
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                        }
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        Description: del curso
                    </Typography>
                    <Button onClick={() =>console.log('Boton')}>
                        Ver Curso
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

function Cursos() {
    const classes = useStyles()
    return (
        <Container className={classes.page}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} lg={4}>
                    <Curso/>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Curso/>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Curso/>
                </Grid>



                <Grid item xs={12} md={6} lg={4}>
                    <Curso/>
                </Grid>



                <Grid item xs={12} md={6} lg={4}>
                    <Curso/>
                </Grid>



                <Grid item xs={12} md={6} lg={4}>
                    <Curso/>
                </Grid>



                <Grid item xs={12} md={6} lg={4}>
                    <Curso/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cursos
