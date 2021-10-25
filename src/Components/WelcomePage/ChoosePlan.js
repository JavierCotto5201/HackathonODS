import React from 'react'
import { Grid, Button ,Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
function Plans(){
    const [user, setUser] = useState("");
    const history = useHistory();
    const onChange0 = event => {
        setUser( event.target.value );
      }
    const handleClick = (condition,user) => {
        if(condition === false) {
            history.push({
                pathname: '/cursos4free',
              });
        }
        if(condition === true) {
            alert('Se le ha mandado un correo a: '+user)
            history.push({
                pathname: '/cursos',
              });
        }
      }
    return(
        <div>
            <Grid container spacing={9} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{marginTop: 10, paddingLeft: 100, alignItems:'center', justifyItems:'center'}}>
                    <Grid item xs={4}>
                        <Card sx={{ width: 350, height: 350}} style={{backgroundColor: '#c9ffb0', 
                            alignItems: "center", justifyContent: "center", display: 'grid'}}>
                            <CardHeader
                                title='Plan Gratis'
                                style={{marginLeft:85}}
                            />
                            <CardContent>
                                <ul style={{marginLeft:30}}>
                                    <li> Maximo de 4 videos por dia</li>
                                    <li> Sin cobro, completamente gratuito </li>
                                    <li> Visualizacion de cursos una carrera completa </li>
                                </ul>
                            </CardContent>
                            <Button onClick={() =>handleClick(false,false)} variant="outlined" style={{width: "75%", marginLeft: 35, marginBottom:20}}>Seleccionar</Button>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ width: 350, height: 350}} style={{backgroundColor: '#508736', 
                            alignItems: "center", justifyContent: "center", display: 'grid'}}>
                            <CardHeader
                                title='Plan Premium'
                                style={{marginLeft:85}}
                            />
                            <CardContent>
                                <ul style={{marginLeft:30}}>
                                    <li> Sin numero limitado de visualizacion</li>
                                    <li> Un cobro de $5 </li>
                                    <li> Visualizacion de cursos una carrera completa </li>
                                </ul>
                                <text className="IngreseCorreo" style={{paddingLeft:100, color:'white'}}>Ingrese correo</text>
                                <form>
                                    <input value={user} onChange={onChange0} style={{paddingLeft:100}}></input>
                                </form>
                            </CardContent>
                            <Button onClick={() =>handleClick(true,user)} variant="outlined" style={{width: "75%", marginLeft: 35, marginBottom:20, borderColor:'white', color:'white'}}>Suscribirse</Button>
                        </Card>
                    </Grid>                    
            </Grid>
        </div>
    )
}

export default Plans