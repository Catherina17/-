import React from 'react'
import { useParams } from 'react-router-dom'
import { BlogData } from '../blogData'

export const BlogElement = () => {
    const { blogId } = useParams()
    const blogElement = BlogData.find((item) => item.id === blogId)
    
    return <>
        {blogElement &&
            <>
                <h3>Факт о корги - №{blogId}</h3>
                <p>{blogElement.description}</p>
            </>
        }
    </>
}