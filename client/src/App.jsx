import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-black bg-black h-20 pt-5 w-70 rounded ">Whiteboard</h1>
      <Canvas />
    </div>
  );
}

export default App;
