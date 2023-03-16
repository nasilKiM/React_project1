// 코멘트가 쌓이는 곳

import styled from 'styled-components'

function CommentBoard({ result }) {
	return (
		<S.Container>
			<h2>Comments</h2>
			<div>{result.comments}</div>
		</S.Container>
	)
}

export default CommentBoard

const Container = styled.div`
	width: 80%;
	padding: 60px;
	border: 1px dotted purple;
	margin: 10px auto;
`

const S = {
	Container,
}
