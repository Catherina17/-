import React from 'react'
import { useParams } from 'react-router-dom'
import { blogData } from '../../../mocks'

export const BlogElement = () => {
    const { blogId } = useParams()
    const blogElement = blogData.find((item) => item.id === blogId)
    
    return (
        <>
            {blogElement ? (
                <>
                    <h3>Факт о корги - №{blogId}</h3>
                    <p>{blogElement.description}</p>
                </>
            ) : (
                <div>Данный факт не найден.</div> // Сообщение об ошибке
            )}
        </>
    )
}