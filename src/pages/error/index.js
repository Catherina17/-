import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
    const error = useRouteError()
    
    if (error.status === 404) {
        return <div>Данная страница не найдена</div>
    }

    return <div>Что-то пошло не так</div>
}