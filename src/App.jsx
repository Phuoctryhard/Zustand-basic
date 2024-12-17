import "./App.css";
import { useStore } from "./Zustand/store";
function App() {
  const bears = useStore((state) => state.bears);
  const hanleAdd = useStore((state) => state.increasePopulation);
  const hanleGiam = useStore((state) => state.decreasePopulation);
  // update state
  const updateCount = useStore((state) => {
    return state.updateBears;
  });

  return (
    <>
      <div className="">
        <span>Đếm :{bears} </span>
        <div className="">
          <input type="text" onChange={(e) => updateCount(+e.target.value)} />
        </div>
        <button onClick={hanleAdd}>Thêm </button>
        <button onClick={hanleGiam}>Giảm</button>
      </div>
    </>
  );
}

export default App;
