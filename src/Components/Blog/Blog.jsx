import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";


export default function Blog({blog, handleBookmarks, handleReadingTime}) {
  
  const {title, cover_img, author_img, author_name, hashtags, reading_time, posted_date} = blog
    return (
    <div className=''>
        <img  className='rounded-md mb-5' src={cover_img} alt="" />
        <div className='flex justify-between mb-5'>
            <div className='flex'>
                <img className='w-14 h-14 rounded-full object-cover' src={author_img} alt="" />
                <div className='ml-5'>
                    <h2>{author_name}</h2>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div><span>{reading_time} min read</span>
            <button onClick={handleBookmarks} className='ml-3'><IoBookmarkOutline /></button></div>
        </div> 
        <h1 className='text-4xl font-bold mb-5'>{title}</h1>
        {
            hashtags.map((hashtag, idx) =><span key={idx} className='mr-2'>{hashtag}</span>)
        }
        <div className='my-5 text-purple-500 underline '><a href="#" onClick={()=> handleReadingTime(reading_time)}>Mark as read</a></div>
    </div>
    
  )
}

Blog.prototypes = {
    blog : PropTypes.object.isRequired,
    handleBookmarks : PropTypes.func
}