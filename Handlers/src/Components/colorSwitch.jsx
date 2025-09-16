
import React from 'react'

const ColorSwitch = ({onChangecolor,onClick,children}) => {
  return (
    
    <div onClick={onClick} style={{borderRadius:"2px",borderColor:"blue",borderStyle:"solid",backgroundColor:"ThreeDHighlight" , padding:"5px",color:"antiquewhite", margin:"10px"} }>
      <button onClick={e=>{e.stopPropagation();
        onChangecolor()
      }}>changeColor</button>
      {children}
    </div>
  );
}

export default ColorSwitch