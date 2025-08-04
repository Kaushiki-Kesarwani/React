import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
  const [sec, setSec] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Timer Started");
      setSec(prevsecond => prevsecond + 1)
    }, 1000)

    return () => {
      console.log("Time to stop");
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <h1>Seconds : {sec}</h1>
    </div>
  )
}

export default Timer
