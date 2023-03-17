import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const AddTeacher = () => {
    const [authenticated, setauthenticated] = useState(null);
    
    const [name,getName] = useState()
    const [designation,getDesignation] = useState()
    const [branch,getBranch] = useState()
    const navigate = useNavigate();
    

  

    const handleSubmit=(e)=>{
        e.preventDefault();
        

        axios.post('http://localhost:9000/teacher/add', {
            name: name,
            designation: designation,
            branch:branch,
        })
          .then(function (response) {
            console.log(response.data);
            if(response.data.error){
                alert(" cannot add Teacher")
            }else{
                alert(" Teacher Added Successfully")
                getName("")                
                getBranch("")               
                getDesignation("") 
                navigate("/teacherlist")
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        


    }
    // css
    const addDiv = {
        // marginLeft:'33%',
        textAlign:'center',
        width:'100%',
        border:'1px solid rgba(0,0,0,.4)',
        
    }
    const heading ={
        textTransform : 'uppercase'
    }
    const inputField ={
        border : 'none',
        borderBottom : '2px solid rgba(0,0,0,.2)',
        // boxShadow : '1px solid rgba(0,0,0,.1)',
        width: '80%',
        padding: '12px 20px',
        margin: '8px 0',
        textAlign : 'center'

    }
    const button = {
        width : '80%',
        padding : '5px',
        backgroundColor : 'blue',
        color : 'white',
        fontSize : '20px',
        border : 'none',
        borderRadius : '5px'
    }
    return (
        <div style={addDiv}>
            <h3 style={heading}>  Teacher's Registration </h3>
            <form onSubmit={handleSubmit}>
                <p>
                    <input style={inputField} onChange={e=>getName(e.target.value)} type="text" name="name" placeholder="Enter Your Name" required defaultValue={name}/>
                </p>

                <p>
                    <input style={inputField} defaultValue={designation} onChange={e=>getDesignation(e.target.value)}type="text" name="email" placeholder="Enter Your Email" required/>
                </p>

                <p>
                    <input style={inputField} defaultValue={branch} onChange={e=>getBranch(e.target.value)}  type="text" name="branch" placeholder="Enter Your Branch" required/>
                </p>

                <p>
                    <button style={button}>Add Teacher</button>
                </p>

            </form>
        </div>
    )
    
};

export default AddTeacher;