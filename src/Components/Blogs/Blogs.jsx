import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'
import PropTypes from 'prop-types'

export default function Blogs({handleBookmarks, handleReadingTime}) {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
  return (
    <div className='w-2/3 px-5'>    
        {
            blogs.map(blog =><Blog handleReadingTime={handleReadingTime} handleBookmarks={()=>handleBookmarks(blog)} key={blog.id} blog={blog}></Blog>)
        }
    </div>
  )
}

Blogs.prototypes = {
  handleBookmarks : PropTypes.func,
  handleReadingTime : PropTypes.func
}
