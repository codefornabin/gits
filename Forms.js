import React from 'react';
import {Button,Grid,Paper,Avatar,Typography,TextField} from '@material-ui/core';
import {FaUserPlus} from 'react-icons/fa';
import { Switch } from 'antd';



const Forms=()=>{
const paperStyle={padding:'30px 20px',width:300,margin:'20px auto'}

    return(


        <>

        <Grid>
        
     <Paper elevation={5} style={paperStyle}>

     <Avatar style={{margin:'5px auto', marginTop:3,color:''}}>
     <FaUserPlus/>
     </Avatar>

     <h1 style={{margin:0}}>Sign up</h1>
     <Typography varant='caption' >please procede the form clearly</Typography>
     
<form>


<TextField fullWidth label='Name' placeholder='Enter your name:' type='text'/>


<TextField fullWidth label='Email'/>


<TextField fullWidth label='PhoneNumber'/>
<TextField fullWidth label='Password' type='password'/>
<TextField fullWidth label='Confirm password:' type='password'/>

<Button variant="contained" color='secondary' style={{marginTop:4}} >Sign up</Button>


</form>
</Paper>

        </Grid>
        </>
    


    );

}

export default Forms;