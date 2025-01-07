import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const Feedback = () => {
    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const isTest = searchParams.get('test') === 'true'

    // console.log(searchParams.get('test'))

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onSend = () => {
        setTimeout(() => navigate('/'), 1000)
    }


    return (
        <form>
            <input type='text' name='name' placeholder='Имя' onChange={onChange} />
            <br />
            <br />
            <input type='email' name='email' placeholder='Email' onChange={onChange} />
            <br />
            <br />
            {isTest && 
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam deleniti, dignissimos eaque fuga 
                    recusandae suscipit. A accusamus animi assumenda cumque dolore enim fugit, ipsum, maxime quas sapiente sunt totam?
                </div>
            }
            <button type='button' onClick={onSend}>Отправить</button>
        </form>
    )
}