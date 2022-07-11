import React, {useState} from 'react'

function Sec02(){
//  state
// const [num, setNum] = React.useState(100)
const [num, setNum] = useState(100)
return (
    <div>
        <h1>계산하기</h1>
        <p>num : {num}</p>
        <p>
            <button
                onClick = {click}>click 하기</button>
        </p>
    </div>
)
function click(){
    setNum(num * 2)
}
}
export default Sec02