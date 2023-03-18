// 1. 리스트페이지에 들어가는 순간 api요청(redux thunk사용)
// 2. (동시에) + slice사용해서 로딩여부확인
// 3. 요청끝나면 데이터끝났다고 인지
// 4. 리스트 넣어주기.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Octokit } from 'octokit';

// value
const initialState = {
	// loading: false,
	lists: [],
	details: [],
	comments: [],
	getIssueState: {
		loading: true,
		done: false,
		err: null,
	},
};

const octokit = new Octokit({
	auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN, //.env처리함
});

// list뿌려주기
export const getIssue = createAsyncThunk('issue/getIssue', async ({ page }) => {
	console.log('getIssue');
	const result = await octokit.request(
		'GET /repos/angular/angular-cli/issues',
		{
			owner: 'angular',
			repo: 'angular-cli',
			headers: {},
			per_page: 10,
			page: page,
		},
	);
	return result.data;
});

export const getDetails = createAsyncThunk('issue/getDetails', async id => {
	console.log('reducer', id);
	const result = await octokit.request(
		`GET /repos/angular/angular-cli/issues/${id}`,
		{
			owner: 'angular',
			repo: 'angular-cli',
			issue_number: id,
		},
	);
	return result.data;
});

export const getComments = createAsyncThunk('issue/getComments', async id => {
	const result = await octokit.request(
		`GET /repos/angular/angular-cli/issues/${id}/comments`,
		{
			owner: 'angular',
			repo: 'angular-cli',
		},
	);
	return result.data;
});

export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	reducers: {},
	extraReducers: {
		//issue 리스트 호출
		[getIssue.pending.type]: (state, action) => {
			// 호출 전
			state.getIssueState.loading = true;
		},
		[getIssue.fulfilled.type]: (state, action) => {
			// 성공
			state.getIssueState.loading = false;
			state.getIssueState.lists = action.payload;
		},
		[getIssue.rejected.type]: (state, action) => {
			// 실패
			state.getIssueState.loading = false;
			state.getIssueState.lists = [];
		},
		//디테일페이지
		[getDetails.pending.type]: (state, action) => {
			state.getIssueState.loading = true;
		},
		[getDetails.fulfilled.type]: (state, action) => {
			state.getIssueState.loading = false;
			state.getIssueState.details = action.payload;
		},
		[getDetails.rejected.type]: (state, action) => {
			state.getIssueState.loading = false;
			state.getIssueState.details = [];
		},
		//코멘트
		[getComments.pending.type]: (state, action) => {
			state.getIssueState.loading = true;
		},
		[getComments.fulfilled.type]: (state, action) => {
			state.getIssueState.loading = false;
			state.getIssueState.comments = action.payload;
		},
		[getComments.rejected.type]: (state, action) => {
			state.getIssueState.loading = false;
			state.getIssueState.comments = [];
		},
	},
});
