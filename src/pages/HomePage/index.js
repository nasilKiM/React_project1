import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getIssue } from 'reducer/loading'
import styled from 'styled-components'
import ContentFiltering from './components/Filtering/ContentFilteringOpt'
import ContentListFiltering from './components/Filtering/ContentListFilteringOpt'
import IssueContent from './components/IssueContent'
import Pagination from './components/Pagination'

function HomePage() {
	const [page, setPage] = useState(1)
	const navigate = useNavigate()

	const list = useSelector(state => state.issue.lists)

	//로딩중
	const loading = useSelector(state => state.issue.loading)
	const dispatch = useDispatch()

	console.log('const list ', list)
	const getIssues = async () => {
		dispatch(getIssue({ page }))
	}
	useEffect(() => {
		console.log('useEffect', list)
		getIssues()
	}, [page])

	//loading중 아이콘 적용해보기
	if (loading) return 'Loading 중'

	return (
		<div>
			<S.Filters>
				<ContentFiltering />
				<ContentListFiltering />
			</S.Filters>
			{list.map(v => {
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
			<Pagination result={list} page={page} setPage={setPage} />
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
