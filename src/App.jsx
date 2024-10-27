import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarks = blog =>{
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks)
  }

  const [readingTime, setreadingTime] = useState(0)

  const handleReadingTime = time =>{
    setreadingTime(readingTime + time)
  }
  
  return (
    <>
      
      <div className='w-2/3 mx-auto py-5'>
        <Header></Header>
        <div className='flex pt-10 gap-5'>
          <Blogs handleReadingTime={handleReadingTime} handleBookmarks={handleBookmarks}></Blogs>
          <Bookmarks readingTime={readingTime} bookmarks={bookmarks} ></Bookmarks>
        </div>
      </div>
     
    
    </>
  )
}

export default App
