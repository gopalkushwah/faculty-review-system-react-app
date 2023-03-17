import React,{useState} from 'react';
import axios from 'axios'


const TeacherReview = () => {

    const [teacherid,getTeacherId] = useState()
    const [reviewby,getReviewBy] = useState()
    const [reviewdate,getReviewdate] = useState()
    const [description,getDescription] = useState()


    const handleTeacherId =(e)=>{
        getTeacherId(e.target.value);
    }

    const handleReviewby =(e)=>{
        getReviewBy(e.target.value);
    }

    const handleReviewdate =(e)=>{
        getReviewdate(e.target.value);
    }

    const handleDescription =(e)=>{
        getDescription(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        

        axios.post('http://localhost:9000/review/create', {
            teacherid: teacherid,
            reviewby: reviewby,
            reviewdate:reviewdate,
            description:description,

          })
          .then(function (response) {
            console.log(response.data);
            if(response.data.error){
                alert(" cannot add this data")
            }else{
                alert("Review added successfully")

            }
          })
          .catch(function (error) {
            console.log(error);
          });
        


    }

     //css
     const reviewDiv = {
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
        <div style={reviewDiv}>
            <h3 style={heading}> Write Teacher's Review </h3>
            <form onSubmit={handleSubmit}>
                <p>
                    <input style={inputField} onChange={ handleTeacherId} type="text" name="teacherid" placeholder="Enter Teacher Name" required/>
                </p>

                <p>
                    <input style={inputField} onChange={ handleReviewby} type="text" name="reviewby" placeholder="Enter Your Rollno" required/>
                </p>

                <p>
                    <textarea style={inputField} onChange={ handleDescription} name="description" placeholder="Please Write Teacher's Review" required>
                        
                    </textarea>
                </p>

                <p>
                   Date of Review  <br></br><input style={inputField} onChange={ handleReviewdate} type="date" name="reviewdate" required/>
                </p>

            

                

                <p>
                    <button style={button}>Submit Review</button>
                </p>

            </form>
        </div>
    );
};

export default TeacherReview;