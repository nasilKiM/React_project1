// - 목록은 RTK클 할용하여 전역 상태 관리 할 것
// - 데이터가 받아오는 동안 리스트 화면은 로딩 페이지를 띄워야함
// 1. 리스트페이지에 들어가는 순간 api요청(redux thunk사용)
// 2. (동시에) + slice사용해서 로딩여부확인
// 3. 요청끝나면 데이터끝났다고 인지
// 4. 리스트 넣어주기.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Octokit } from 'octokit'

// value
const initialState = {
	loading: false,
	lists: [],
}

export const getIssue = createAsyncThunk('issue/getIssue', async ({ page }) => {
	const octokit = new Octokit({
		auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN, //.env처리함
	})
	console.log('getIssue')
	const result = await octokit.request(
		'GET /repos/angular/angular-cli/issues',
		{
			owner: 'angular',
			repo: 'angular-cli',
			headers: {},
			per_page: 10,
			page: page, // 페이지네이션
		},
	)
	return result.data
})

export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	reducers: {},
	extraReducers: {
		[getIssue.pending.type]: (state, action) => {
			// 호출 전
			state.loading = true
		},
		[getIssue.fulfilled.type]: (state, action) => {
			// 성공
			state.loading = false
			state.lists = action.payload
		},
		[getIssue.rejected.type]: (state, action) => {
			// 실패
			state.loading = false
			state.lists = []
		},
	},
})

/* 
dispatch(요청) -- 미들웨어(thunk, addTodo) -- dispatch(대기중) --- reducer (o) -- 대기중에 맞는 비즈니스 로직 실행 (loading = true)
---- 비동기 종료 후
미들웨어 - dispatch(성공/실패) - reducer (o) --- 성공이나 실패 비즈니스 로직 실행

*/
