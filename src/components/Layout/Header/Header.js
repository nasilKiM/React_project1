import styled from 'styled-components'

function BasicHeader() {
	return (
		<>
			<S.Container>
				<h1>GitHub</h1>
				<S.Nav>
					<a>menu1</a>
					<a>menu2</a>
					<a>menu3</a>
					<a>menu4</a>
					<a>menu5</a>
				</S.Nav>
			</S.Container>
		</>
	)
}

export default BasicHeader

const Container = styled.div`
	background-color: #ffffff;
	color: #000000;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (min-width: 600px) {
		flex-direction: column;
		align-items: flex-start;
	}
	& > h1 {
		font-size: 24px;
		margin: 0;
		@media (min-width: 600px) {
			font-size: 20px;
			margin-bottom: 10px;
		}
	}
`
const Nav = styled.div`
	display: flex;
	@media (min-width: 600px) {
		margin-top: 10px;
	}
	& > a {
		color: #000000;
		text-decoration: none;
		margin-left: 20px;
		@media (min-width: 600px) {
			margin-left: 0;
		}
	}
`

const S = {
	Container,
	Nav,
}
