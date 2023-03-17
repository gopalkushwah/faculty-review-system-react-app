import React from 'react';

const HOC = (WrappedComponent,entity) => {
    return class extends React.Component{
        
           state = {
                data:[],
                term :"",            
        };
        componentDidMount(){
            const fetchData= async()=>{
                const res = await fetch(`http://localhost:9000/${entity}`)
                const json = await res.json()
                this.setState({...this.state,data:json});
                console.log(json);
            };
            fetchData();
        }

        render(){
            let {term, data} = this.state;
            let filteredData = data.slice(0,10).filter(d => {
                if (entity==="teachers"){
                    const {name}=d
                    return name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
                }else if(entity === "reviews"){
                    const {teacherid}=d
                    return teacherid.toLowerCase().indexOf(term.toLowerCase()) >= 0;
                }else if(entity === "students"){
                    const {name}=d
                    return name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
                }else{
                    return null;
                }
            });
            
    //css
    const listDiv = {
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
                <div style={listDiv}>
                <h2 style={heading}> {entity}</h2>
                <p>
                <input style={inputField} type='text' value={term} onChange={(e)=>this.setState({...this.state, term :e.target.value})} placeholder={'Search ' + entity}></input>
                </p>
                <br></br>
                <WrappedComponent data={filteredData}></WrappedComponent>
                </div>
            )
        }
    }        
    
};

export default HOC;