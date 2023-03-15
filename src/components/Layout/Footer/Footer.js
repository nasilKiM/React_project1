import styled from 'styled-components'

function BasicFooter() {
	return (
		<>
			<S.Container>
				<div>
					<p>Copyright © 2023 - All right reserved by GitHub</p>
				</div>
			</S.Container>
		</>
	)
}

export default BasicFooter

const Container = styled.div`
	background-color: #000000;
	color: #ffffff;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > p {
		margin: 0;
	}
`

const S = {
	Container,
}
