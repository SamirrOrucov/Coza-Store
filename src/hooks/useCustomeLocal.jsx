import React, { useEffect, useState } from 'react'

function useCustomeLocal(key,initVal='') {
    const [value, setValue] = useState(localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)):initVal)
    useEffect(() => {
     localStorage.setItem(key,JSON.stringify(value))
    }, [value,key])
    
  return [value,setValue]
}

export default useCustomeLocal