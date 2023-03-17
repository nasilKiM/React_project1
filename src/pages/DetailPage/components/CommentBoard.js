// 코멘트가 쌓이는 곳 + map 돌리기

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from 'reducer/loading';
import styled from 'styled-components';
import CommentBoardContent from './CommentBoardContent';

function CommentBoard({ number }) {
	const dispatch = useDispatch();
	const state = useSelector(state => state.issue.comments);

	useEffect(() => {
		dispatch(getComments(number));
	}, []);

	return (
		<S.Wrapper>
			{state.length > 0 ? (
				state.map(item => <CommentBoardContent issue={item} />)
			) : (
				<S.Board>댓글이 없습니다.</S.Board>
			)}
		</S.Wrapper>
	);
}

export default CommentBoard;

const Wrapper = styled.div`
	width: 80%;
	padding: 50px;
	margin: 0 auto;
`;

const Board = styled.div`
	width: 100%;
	border: 1px dashed lightgray;
	border-radius: 50px;
	padding: 20px;
	margin-bottom: 20px;
`;

const S = {
	Wrapper,
	Board,
};
