import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export const Main = () => {
    const [val1, setVal1] = useState(false)
    const [val2, setVal2] = useState(false)

    return <div>
        Это главная страница
        {val1 && val2 && <Navigate to='/posts/2' />}
        <input type='checkbox' value={val1} onChange={(e) => setVal1(e.target.checked)} />
        <input type='checkbox' value={val2} onChange={(e) => setVal2(e.target.checked)} />
    </div>
}