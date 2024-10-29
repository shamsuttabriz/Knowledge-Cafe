import profile from "../assets/profile.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 mx-4 border-b">
      <h1 className="text-4xl font-bold ">Knowledge Cafe</h1>
      <img src={profile} alt="Profile" />
    </div>
  );
}
