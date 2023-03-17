import React,{useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const StudentRegistration = () => {
    const [name,getName] = useState()
    const [email,getEmail] = useState()
    const [rollno,getRollno] = useState()
    const [phone,getPhone] = useState()
    const [classin,getClassin] = useState()
    const [branch,getBranch] = useState()
    const [password,getPassword] = useState()
    
    
    const navigate = useNavigate();

  

    const handleSubmit=(e)=>{
        e.preventDefault();
        

        axios.post('http://localhost:9000/student/create', {
            name: name,
            email: email,
            rollno:rollno,
            phone:phone,
            branch:branch,
            classin:classin,
            password:password


          })
          .then(function (response) {
            console.log(response.data);
            if(response.data.error){
                alert(" cannot add this data")
            }else{
                alert(" Student Registration Successfull")
                // getName("")
                // getRollno("")
                // getBranch("")
                // getClassin("")
                // getEmail("")
                // getPassword("")
                // getPhone("")
                navigate("/studentlogin");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        


    }

    //css
    const registerDiv = {
        // marginLeft:'33%',
        textAlign:'center',
        width:'100%',
        border:'1px solid rgba(0,0,0,.2)',
        
    }
    const heading ={
        textTransform : 'uppercase'
    }
    const inputField ={
        border : 'none',
        borderBottom : '2px solid rgba(0,0,0,0.2)',
        // boxShadow : '2px solid rgba(0,0,0,.1)',
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
        <div style={registerDiv}>
            <h3 style={heading}>  Student Registration </h3>
            <form onSubmit={handleSubmit}>
                <p>
                    <input style={inputField} onChange={e=>getName(e.target.value)} type="text" name="name" placeholder="Enter your name" required defaultValue={name}/>
                </p>

                <p>
                    <input style={inputField} defaultValue={email} onChange={e=>getEmail(e.target.value)}type="email" name="email" placeholder="Enter your email" required/>
                </p>

                <p>
                    <input style={inputField} defaultValue={phone} onChange={e=>getPhone(e.target.value)}  type="text" name="phone" placeholder="Enter your phone" required/>
                </p>

                <p>
                    <input style={inputField} defaultValue={password} onChange={e=>getPassword(e.target.value)}  type="password" name="password" placeholder="Create a password" required/>
                </p>

                <p>
                    <input style={inputField} defaultValue={classin} onChange={e=>getClassin(e.target.value)} type="text" name="classin" placeholder="Enter class" required/>
                </p>

                <p>
                    <input style={inputField} defaultValue={branch} onChange={e=>getBranch(e.target.value)}  type="text" name="branch" placeholder="Enter your branch" required/>
                </p>

                <p>
                    <input style={inputField} defaultValue={rollno} onChange={e=>getRollno(e.target.value)}  type="text" name="rollno" placeholder="Enter your roll number" required/>
                </p>

                <p>
                    <button style={button}>Register Student</button>
                </p>

            </form>
        </div>
    );
};

export default StudentRegistration;