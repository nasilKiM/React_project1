import { Octokit } from 'octokit'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ContentFiltering from './components/Filtering/ContentFilteringOpt'
import ContentListFiltering from './components/Filtering/ContentListFilteringOpt'
import IssueContent from './components/IssueContent'
import Pagination from './components/Pagination'

function HomePage() {
	const [page, setPage] = useState(1)

	const [result, setResult] = useState([])
	const navigate = useNavigate()

	const getIssues = async () => {
		const octokit = new Octokit({
			auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN, //.env처리함
		})

		const result = await octokit.request(
			'GET /repos/angular/angular-cli/issues',
			{
				owner: 'angular',
				repo: 'angular-cli',
				headers: {
					// 깃허브에 담아보내는거
				},
				per_page: 10,
				page: page, // 페이지네이션
			},
		)
		setResult(result.data)
		console.log('====>', result)
	}
	useEffect(() => {
		getIssues()
	}, [page])

	console.log(result)

	return (
		<div>
			<S.Filters>
				<ContentFiltering />
				<ContentListFiltering />
			</S.Filters>
			{result.map(v => {
				return (
					<div
						onClick={() => {
							navigate(`/issue/${v.number}`)
						}}
					>
						<IssueContent issue={v} />
					</div>
				)
			})}
			<Pagination result={result} page={page} setPage={setPage} />
		</div>
	)
}

export default HomePage

const Filters = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 5px 50px 5px 0;
`

const S = {
	Filters,
}
