import { call, put, takeEvery } from 'redux-saga/effects';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
});

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
})

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    data,
  }
})

//當一個 middleware 透過 Saga 取得一個被 yield(讓步) 的 Effect，Saga 會被暫停，直到 Effect 被完成。

function* fetchData() {
  const data = yield call(//call用來執行function，將fetch寫在call裡
    () => fetch('https://httpbin.org/get')
      .then(response => response.json())
  )
  yield put(fetchDataSuccess(data)) //put觸發Reducer，將call獲取到的資料送到Reducer中儲存
}

function* mySaga() {
  yield takeEvery(FETCH_DATA_BEGIN, fetchData)  
}

export default mySaga