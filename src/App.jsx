import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };
  return (
    <div className="md:container mx-auto font-exo">
      <Header></Header>
      <main className="md:flex p-4 mx-4 gap-12">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </div>
  );
}

export default App;
