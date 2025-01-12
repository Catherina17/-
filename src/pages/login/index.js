import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const Login = () => {
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const userName = formData.get('userName')

        if (!userName) {
            setError('Введите имя пользователя')
            return
        }

        auth.signIn(userName, () => {
            setError('')
            navigate(from, {replace: true})
        })
    }

    return (
        <div>
            <p>Пожалуйста, авторизуйтесь</p>
            <div style={{ color: 'red' }}>{error}</div>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя пользователя: <input name='userName' type='text' />
                </label>
                <br />
                <button type='submit'>Войти</button>
            </form>
        </div>
    )
}