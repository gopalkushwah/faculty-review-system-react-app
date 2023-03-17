import React,{useState} from 'react';
import axios  from 'axios';


const StudentLogin = () => {
    const [rollno, getRollNumber] = useState()
    const [password , getPassword ] = useState()
    const [authenticated,setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false))

    const handlePassword = (e)=>{
        getPassword(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(rollno)
        console.log(password)
        getPassword("")
        getRollNumber("")
        axios.get('http://localhost:9000/students', {
            rollno: rollno,
            password: password,            

          })
          .then(function (response) {
            console.log(response.data);
            if(response.data.error){
                alert(" Cannot login")
            }else{
                alert("Login successfull")
                setauthenticated(true)
                localStorage.setItem("authenticated", true);

            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    // css
    const loginDiv = {
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
        <div style={loginDiv}>
            <h3 style={heading}>  Student Login </h3>
            <form onSubmit={handleSubmit}>
                <p>
                    <input style={inputField} onChange={(e)=>getRollNumber(e.target.value)} type="text" name="rollno" placeholder="Enter Your Scholar Number" defaultValue={rollno} required/>
                </p>
               
                <p>
                    <input style={inputField} onChange={handlePassword} type="password" name="password" placeholder="Enter Your Password" defaultValue={password} required/>
                </p>

               
                

                <p>
                    <button style={button}>Login</button>
                </p>

                {/* <p>Remove these lines in production State data with hooks <br></br>
                roll no :  {rollno} <br/>
                password : {password}
                </p>  */}

            </form>
        </div>
    );
};

export default StudentLogin;