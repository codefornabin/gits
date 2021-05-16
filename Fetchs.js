import React ,{useState,useEffect} from 'react';

const url='https://api.github.com/users';
const FetchUserData=()=>{
const [users,setUsers]=useState([]);

const getUsers= async ()=>{
    const response= await fetch(url);
    const users=await response.json();
    setUsers(users);
    console.log(users)



};
useEffect(()=>{

    getUsers();
},[]);



    return(

        <>
<h1>Github users...</h1>
<ul className='users'>

{users.map((user)=>{
    const {login,id,url,avatar_url,html_url}=user;
    return <li key={id}>
    <img src={avatar_url} alt={login}/>
    <div>
    <p style={{marginRight:'25%'}}>{login}</p>
    <a href={html_url}>Visit github</a>


    </div>

    </li>

    
})}
</ul>


        </>
    )
}
export default FetchUserData;

