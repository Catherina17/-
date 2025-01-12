import React from 'react'
import { Link } from 'react-router-dom'
import { blogData } from '../../mocks'

export const Blog = () => {
    return <div>
        Это страница блога о корги :) 
        {blogData.map((item) => <div key={item.id}>
            <div>
                <Link to={`/blog/${item.id}`}>
                    {item.name}
                </Link>
            </div>
        </div>)}  
    </div>
}