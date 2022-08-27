import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// 1. 초기값, 리듀서함수 셋팅
const initialState = { value: 0 };
const reducer = (state, action) => {
  if (action.type === "up") {
    return { ...state, value: state.value + action.step };
  }
  return state;
};
// 2. 스토어 설정
const store = createStore(reducer, initialState);

const Counter = () => {
  // 4. 상태값 사용
  const count = useSelector((state) => state.value);
  // 5. 상태값 연결
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          // 6. 상태값 연결
          dispatch({ type: "up", step: 2 });
        }}
      >
        +
      </button>{" "}
      {count}
    </div>
  );
};

const redux = () => {
  return (
    // 3. 스토어 제공
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
};

export default redux;

/*
[1] 상태값 생성 및 연결
[2] 상태값 업데이트

[1] 상태값 생성 및 연결
  1. store 생성
    - import { createStore } from '@reduxjs/toolkit';
  2. 초기값, reducer 함수 정의
    -  initialState 초기값 설정
    - reducer 함수 생성
  3. store에 (reducer함수, initialState초기값) 셋팅
    - const store = createStore(reducer, initialState); 
  4. store를 Provider를 통해 통해 application에 공급
      <Provider store={store}>
        <div>
          <Counter></Counter>
        </div>
      </Provider> 
  5. store에서 상태값 가져오기 => useSelector() 사용
    - import { Provider, useSelector } from 'react-redux';
    - const count = useSelector(state => state.value)

[2] 상태값 업데이트
  6. 상태값 동작하게 만들기 (=액션 조건문 설정) => useDispatch()
    - const dispatch = useDispatch()
    - <button onClick={()=>{dispatch({type:'up', step:2})}}>+</button>
  7. reducer함수의 해당 상태값 조건문 실행문 만들기
      if (action.type === "up") {
        return { ...state, value: state.value + action.step };
      }
 */
