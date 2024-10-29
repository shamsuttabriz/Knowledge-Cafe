import { Bookmark } from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks, readingTime }) {
  //   console.log(bookmarks[0].reading_time);
  return (
    <div className="md:1/3">
      <h1 className="px-12 py-5 rounded-lg border border-violet-700 text-violet-700 font-bold text-2xl bg-violet-100">
        Spent time on read : {readingTime}
      </h1>
      <div className="bg-gray-100 mt-10 rounded-lg p-5">
        <h1 className="text-2xl font-bold mb-6">
          Bookmarked Blogs : {bookmarks.length}
          <div>
            {bookmarks.map((bookmark, idx) => (
              <Bookmark key={idx} bookmark={bookmark}></Bookmark>
            ))}
          </div>
        </h1>
      </div>
    </div>
  );
}
