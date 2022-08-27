import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../store";
import { up } from "../counterSlice";
import { asyncUpFetch } from "../counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const status = useSelector((state) => {
    return state.counter.status;
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(asyncUpFetch());
        }}
      >
        + async fetch
      </button>
      <br />

      <div>
        {count} | {status}
      </div>
    </div>
  );
}

const ReduxToolkitThunk = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
};

export default ReduxToolkitThunk;

/*
- Redux Thunk는 비동기적인 작업을 리덕스로 처리할 때 사용함
- createAsyncThunk는 비동기 작업을 처리하는 action을 만들어 줌

- 동기적인 작업은 reducers를 사용하고, 비동기적인 작업은 extraReducers를 사용함
    - 동기적인 작업은 reducers를 사용하면 툴킷이 action creator를 자동으로 만들어 줌
    - 비동기 작업은 action creator를 자동으로 만들지 못하기 때문에 extraReducers 안에서 정의함.
*/
