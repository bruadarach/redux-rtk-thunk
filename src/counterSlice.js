import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// createAsyncThunk은 비동기작업을 처리하는 action creator를 만듭니다.
const asyncUpFetch = createAsyncThunk("counterSlice/asyncUpFetch", async () => {
  const resp = await fetch(
    "https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits"
  );
  const data = await resp.json();
  return data.value;
});

// 2. (작은 스토어인) Slice 생성
const counterSlice = createSlice({
  // 2. Slice 이름, 초기값, reducers 함수 정의
  name: "counterSliceName",
  initialState: { value: 0, status: "Welcome" },
  reducers: {
    up: (state, action) => {
      // *불변성 처리 쉬움
      state.value = state.value + action.payload;
    },
  },

  // 2개 파라미터 필요 : 액션 타입, 실행함수,
  // extraReducers는 3개의 케이스(pending, fulfilled, rejected)를 가질 수 있음
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

// 2. Slice export 하기
export default counterSlice;
export const { up } = counterSlice.actions;
export { asyncUpFetch };

/*
  redux-toolkit 장점: 불변성 처리 쉬움
      - 방법 (1) state.value = state.value + action.step;
        - 이 경우에는 dispatch에 액션값 직접 전달 필요
        - type에 "슬라이스이름/액션명"으로 넣어주기
            - dispatch({ type: "counterSliceName/up", step: 2 });
      - *방법 (2) tate.value = state.value + action.payload;
        - console.log(action); // {type: 'counterSliceName/up', payload: 2}
        - 리덕스툴킷에서는 리듀스 함수들을 참고해서 자동으로 액션을 만들어내는 액션크리에이터를 생성해 줌
        - 따라서, 자동으로 생성된 액션크리에이터 이용 시 action.step 대신, action.payload로 작성
            - export default counterSlice로 내보내면 아래 형식으로 사용
                - dispatch(counterSlice.actions.up(2));
            - export const { up } = counterSlice.actions로 내보내면 아래 형식으로 사용
                - dispatch(up(2));
 */

/*
  redux-thunk 특징
    - createAsyncThunk은 비동기작업을 처리하는 action creator를 만듭니다. 
    - action creator는 아래와 같이 3가지 상태를 갖습니다. 
    - action creator.pending는 대기상태를 의미합니다. 
    - action creator.fulfilled 는 완료 상태를 의미합니다. 
    - action creator.rejected는 오류 상태를 의미합니다. 
    - thunk는 각각의 상태에 따른 reducer를 체계적으로 작성할 수 있도록 유도합니다. 
    - thunk를 처리할 때는 extraReducers를 사용합니다. 
*/
