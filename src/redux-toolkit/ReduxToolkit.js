import { Provider, useSelector, useDispatch } from "react-redux";
import { up } from "../counterSlice";
import store from "../store";

const Counter = () => {
  // 3. store의 state값 선택/연결
  // 3. state값에 접근하려면, state.리듀서함수명.value
  const count = useSelector((state) => {
    // console.log(state)); // counter
    // 3. state.리듀서함수명.value로 상태값 선택/ 연결
    return state.counter.value;
  });

  // 4. state값 업데이트
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          // 4. state값 업데이트
          dispatch(up(2)); // dispatch(action(payload))
        }}
      >
        +
      </button>
      {/* 3. state값 사용 */}
      {count}
    </div>
  );
};

const ReduxToolkit = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
};

export default ReduxToolkit;

/*
  useSelect : 선택/연결/사용
  useDispatch : 상태값 업데이트
*/
