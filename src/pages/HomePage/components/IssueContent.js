import styled from 'styled-components'
import { flexCenter } from '../../../styles/common'

function IssueContent({ issue }) {
	return (
		<S.Wrapper>
			<S.FirstLine>
				<h3>#{issue.number}</h3>
				<h3>{issue.title}</h3>
				<h3>Comments {issue.comments}</h3>
			</S.FirstLine>
			<S.Body>{issue.body}</S.Body>
			<S.LastLine>
				<div>{issue.user.login}</div>
				<div>{issue.created_at}</div>
			</S.LastLine>
		</S.Wrapper>
	)
}
export default IssueContent

const Wrapper = styled.div`
	width: 90vw;
	height: 20vh;
	margin: 5vh 5vh;
	display: flex;
	border: 1px solid gray;
	border-radius: 5px;
	flex-direction: column;
	${flexCenter}
`

const FirstLine = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`
const Body = styled.div`
	height: 15vh;
	width: 100%;
	margin: 20px;

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
`

const LastLine = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	& > div {
		padding-left: 1vw;
	}
`

const S = {
	Wrapper,
	FirstLine,
	Body,
	LastLine,
}
