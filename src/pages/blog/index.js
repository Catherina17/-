import React from 'react'
import { Link } from 'react-router-dom'
import { BlogData } from './blogData'

export const Blog = () => {
    return <div>
        Это страница блога о корги :) 
        {BlogData.map((item) => <div key={item.id}>
            <div>
                <Link to={`/blog/${item.id}`}>
                    {item.name}
                </Link>
            </div>
        </div>)}  
    </div>
}