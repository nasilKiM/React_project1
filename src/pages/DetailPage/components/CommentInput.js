// comment input창 있는곳. (실제 추가/수정/삭제 구현은 x)

//

import React, { useState } from 'react';
import styled from 'styled-components';

const CommentInput = ({ onSubmit }) => {
	const [comment, setComment] = useState('');

	const handleCommentChange = event => {
		setComment(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		onSubmit(comment);
		setComment('');
	};

	return (
		<S.CommentForm onSubmit={handleSubmit}>
			<S.CommentInputContainer>
				<S.ComInput
					placeholder="Leave a comment"
					value={comment}
					onChange={handleCommentChange}
				/>
			</S.CommentInputContainer>
			<S.CommentButton type="submit">Comment</S.CommentButton>
		</S.CommentForm>
	);
};

export default CommentInput;

const CommentForm = styled.form`
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 600px) {
		flex-direction: column-reverse;
	}
`;

const CommentInputContainer = styled.div`
	width: 100%;
	@media screen and (max-width: 600px) {
		margin-bottom: 8px;
	}
`;

const ComInput = styled.textarea`
	width: 100%;
	padding: 60px;
	margin: 0 auto;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	font-size: 16px;
	margin-bottom: 16px;

	&:focus {
		outline: none;
		border-color: #0077ff;
	}

	@media screen and (max-width: 600px) {
		font-size: 14px;
		padding: 8px;
		margin-bottom: 8px;
	}
`;
const CommentButton = styled.button`
	width: 100px;
	align-self: flex-end;
	background-color: #0077ff;
	color: white;
	font-size: 16px;
	padding: 12px;
	margin-bottom: 20px;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #0058c4;
	}

	@media screen and (max-width: 600px) {
		font-size: 14px;
		padding: 8px;
	}
`;

const S = {
	ComInput,
	CommentForm,
	CommentButton,
	CommentInputContainer,
};
