import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getIssue } from 'reducer/loading';
import styled from 'styled-components';
import ContentFiltering from './components/Filtering/ContentFilteringOpt';
import ContentListFiltering from './components/Filtering/ContentListFilteringOpt';
import IssueContent from './components/IssueContent';
import Pagination from './components/Pagination';
// import Pagination2 from 'components/Layout/Pagination/Pagination';

function HomePage() {
	const [page, setPage] = useState(1);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const list = useSelector(state => state.issue.lists);
	const loading = useSelector(state => state.issue.loading);

	//===========================================//

	// const AllIssue = 200;
	// const getIssueState = useSelector(state => state.issue.getIssueState);

	// const { owner, repository, page, per_page } = useParams();

	// const getData = useCallback(async () => {
	// 	dispatch(getIssue({ owner, repository, page, per_page }));
	// }, [page, per_page]);

	// useEffect(() => {
	// 	if (getIssueState.loading === true) {
	// 	}
	// 	getData();
	// }, [getData]);

	//===========================================//

	const getIssues = async () => {
		dispatch(getIssue({ page }));
	};
	useEffect(() => {
		console.log('useEffect', list);
		getIssues();
	}, [page]);

	return (
		<div>
			<S.Filters>
				<ContentFiltering />
				<ContentListFiltering />
			</S.Filters>
			{loading ? (
				<S.LoadingMessage>
					<S.Spinner /> Loading...
				</S.LoadingMessage>
			) : null}
			{list.map(v => {
				return (
					<div
						onClick={() => {
							navigate(`/issue/${v.number}`);
						}}
					>
						<IssueContent issue={v} />
					</div>
				);
			})}
			<Pagination page={page} setPage={setPage} result={list} />
			{/* <Pagination2 total={AllIssue} limit={per_page} page={page} /> */}
		</div>
	);
}

export default HomePage;

const Filters = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 5px 50px 5px 0;
`;

const LoadingMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	font-size: 24px;
	color: #888;
`;

const Spinner = styled.div`
	border: 4px solid #f3f3f3;
	border-top: 4px solid #3498db;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const S = {
	Filters,
	LoadingMessage,
	Spinner,
};
