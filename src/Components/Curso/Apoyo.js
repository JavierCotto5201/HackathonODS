import React from 'react'
import { Container, Grid, Button, Card, Typography, IconButton } from '@mui/material';



const lista =[
    {
        name: 'Definicion Mate Discreta',
        link: 'https://www.galileo.edu/trends-innovation/que-es-la-matematica-discreta/'
    },
    {
        name: 'Definicion Axioma',
        link: 'https://definicion.de/axioma/'
    },
    {
        name: 'Argumentos Mate Discreta',
        link: 'http://cb.mty.itesm.mx/tc1003/lecturas/tc1003-013.pdf'
    },
    {
        name: 'LOS MÉTODOS DE DEMOSTRACIÓN EN MATEMÁTICA',
        link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiY1sf10eTzAhWWRjABHRpICd4QFnoECBIQAw&url=http%3A%2F%2Fbiblioteca.usac.edu.gt%2Ftesis%2F07%2F07_1914.pdf&usg=AOvVaw1QCeEDg7JRhbUTjiei9G4t'
    },
    {
        name: 'Cómo hacer demostraciones',
        link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj0m9j20eTzAhVETTABHV9aAdoQFnoECAMQAw&url=http%3A%2F%2Fwww.matetam.com%2Fsites%2Fdefault%2Ffiles%2Fmetodos_de_demostracion.pdf&usg=AOvVaw2B4NU1Rckh0hM17Z6jkIjG'
    },
    {
        name: 'Circuitos',
        link: 'https://es.wikipedia.org/wiki/Circuito'
    },
    {
        name: 'Atomo',
        link: 'https://es.wikipedia.org/wiki/%C3%81tomo'
    },
]
function Apoyo(props) {
    return (
        <Container style={{ marginTop: 20 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    lista.map(curso => {
                        return (
                            <Grid key={curso.id} item xs={12} md={6} lg={4}>
                                <p>
                                    <a href={curso.link}>{curso.name}</a>
                                </p>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}


export default Apoyo

