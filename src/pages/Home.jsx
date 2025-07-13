import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();

  const handleEnter = () => {
    Navigate("/todo");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-6xl text">ToDo List</h1>
      <button
        className="px-4 py-1 bg-green-400 rounded-xl shadow-md shadow-black mt-5"
        onClick={handleEnter}
      >
        Enter
      </button>
    </div>
  );
}

export default Home;
