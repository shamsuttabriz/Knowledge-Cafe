import { CiBookmark } from "react-icons/ci";

export default function Blog({ blog }) {
  console.log(blog);
  const {
    author_img,
    author,
    blog_title,
    cover_img,
    hash_tags,
    post_date,
    reading_time,
  } = blog;
  return (
    <div>
      <img
        className="h-96 w-full object-cover rounded-lg border border-violet-600 mb-8"
        src={cover_img}
        alt={`Cover picture of the title ${blog_title}`}
      />
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 rounded-full object-cover border border-violet-500"
            src={author_img}
            alt="Author"
          />
          <div>
            <h1 className="text-2xl text-black font-semibold">{author}</h1>
            <p className="text-base text-gray-500">{post_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xl text-gray-500">
          <span>{reading_time} min read</span>
          <button>
            <CiBookmark className=""></CiBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-5xl font-bold leading-snug">{blog_title}</h1>
      <div className="my-6">
        {hash_tags.map((hash, idx) => (
          <span className="mr-2 text-base text-gray-500" key={idx}>
            {hash}
          </span>
        ))}
      </div>
      <a className="text-lg text-violet-500 font-bold underline" href="#">
        Mark as read
      </a>
      <hr className="border-b my-6" />
    </div>
  );
}
