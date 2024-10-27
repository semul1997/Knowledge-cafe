import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark"


export default function Bookmarks({bookmarks, readingTime}) {
  return (
    <div className="w-1/3  bg-gray-200 p-3 rounded-lg text-center">
      <div className="border-2 border-purple-500 bg-purple-300 text-center px-5 py-3 text-black text-xl font-semibold rounded-xl"><h2>Spent time on read: {readingTime} </h2></div>
      <h1 className="text-3xl font-bold">Bookmarks: {bookmarks.length}</h1>
      {bookmarks.map(bookmark =><Bookmark bookmark={bookmark}></Bookmark>)}
    </div>
    
  )
}

Bookmark.prototypes = {
bookmarks : PropTypes.object.isRequired,
readingTime: PropTypes.string.isRequired
}
