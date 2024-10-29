import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="md:container mx-auto font-exo">
      <Header></Header>
      <main className="md:flex p-4 mx-4 gap-12">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </div>
  );
}

export default App;
