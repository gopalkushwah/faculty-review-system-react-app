import React,{useEffect,useState} from 'react';


const ViewTeacherReviews = () => {
    const [users,setUsers]= useState([]);
    const [term,setTerm]= useState("");
    useEffect(()=>{
        const fetchUsers= async()=>{
            const res = await fetch("http://localhost:9000/reviews")
            const json = await res.json()
            setUsers(json);
            console.log(json);
        };
        fetchUsers();



    },[]);

    let filterUsers = users.filter(({description})=>{
        return description.indexOf(term)>=0;
    }).map(user=>
        <p key ={user._id}>{user.description}</p>

        )

    // css
    //css
    const reviewDiv = {
        textAlign:'center',
        width:'100%',
        border:'1px solid rgba(0,0,0,.2)',
        
    }
    const inputField ={
        border : 'none',
        borderBottom : '2px solid rgba(0,0,0,0.2)',
        width: '80%',
        padding: '12px 20px',
        margin: '8px 0',
        textAlign : 'center',
        fontSize : '18px'
    }
    const heading ={
        textTransform : 'uppercase',
        fontSize : '30px',
    }
    
    return (
        <div style={reviewDiv}>
            <h1 style={heading}>All Reviews</h1>
            <input style={inputField} type='text' value={term} onChange={(e)=>setTerm(e.target.value)} placeholder='Search Reviews'></input>
            {filterUsers}
           

            
            
        </div>
    );
};

export default ViewTeacherReviews;