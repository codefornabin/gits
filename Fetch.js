import React ,{useEffect} from 'react';


const FetchData=()=>{



    useEffect=()=>{
        const fetchapi='htttps://api.github.com/users/hacktivist123/repos';
        fetch(fetchapi)
        .then((response)=>response.json())
        .then((data)=>console.log('This is your data ',data))



    


    }

    return(

        <>

        <h1>Check out the browser console....</h1>
        </>
    )

}

export default FetchData;