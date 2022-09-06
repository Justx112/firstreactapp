import { type } from "@testing-library/user-event/dist/type";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div style={{display:'flex'}}>
      <button onClick={() => dispatch({type:'plus'})}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'minus' })}>-</button>
    </div>
  );
}

export default App;
