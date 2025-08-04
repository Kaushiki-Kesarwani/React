import React from 'react'

const signup = () => {
  return (
    <div><form action="" onClick={e =>{
        e.preventDefault();
        alert("you are going to submit your form")}}>
        <input type="text" />
        <button>submit</button>
    </form>

    </div>
  )
}

export default signup