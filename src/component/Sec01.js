import React from 'react'

export default class Sec01 extends React.Component{
    state = {
        count : 0
    }
    render(){
        return (
            <div>
                <h1>계산하기</h1>
                <p>count : {this.state.count}</p>
                <p>
                    <button 
                    onClick = {this.click}
                        // onClick={() =>{
                        //    this.setState({count:this.state.count+10}) 
                        // }}
                        >count plus</button>
                </p>
            </div>
        )
    }
    click = () =>{
            this.setState({count: this.state.count + 10})
    }
}


//  class Sec01 extends React.Component{}
//  exprot default Sec01