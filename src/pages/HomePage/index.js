import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getIssue } from 'reducer/loading';
import styled from 'styled-components';
import ContentFiltering from './components/Filtering/ContentFilteringOpt';
import ContentListFiltering from './components/Filtering/ContentListFilteringOpt';
import IssueContent from './components/IssueContent';
import Pagination from './components/Pagination';

function HomePage() {
	// const [page, setPage] = useState(1);
	// const [perPage, setPerPage] = useState(10);
	const [searchParams] = useSearchParams();
	const page = Number(searchParams.get('page') || '1');
	const perPage = Number(searchParams.get('filter') || '10');
	const pageFilter = searchParams.get('pageFilter');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const list = useSelector(state => state.issue.lists);
	console.log(list);
	const loading = useSelector(state => state.issue.loading);

	// 정렬조건문
	let newList = list;

	if (pageFilter === 'byDate') {
		newList = [...list].sort((a, b) => {
			return (
				new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
			);
		});
	}

	if (pageFilter === 'byComments') {
		newList = [...list].sort((a, b) => {
			return b.comments - a.comments;
		});
	}

	if (pageFilter === 'byCreated') {
		newList = [...list].sort((a, b) => {
			return (
				new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
			);
		});
	}

	const getIssues = async () => {
		dispatch(getIssue({ page, perPage }));
	};
	useEffect(() => {
		console.log('useEffect', list);
		getIssues();
	}, [page, perPage]);

	return (
		<div>
			<S.Filters>
				<ContentFiltering pageFilter={pageFilter} />
				<ContentListFiltering perPage={perPage} />
			</S.Filters>
			{loading ? (
				<S.LoadingMessage>
					<S.Spinner /> Loading...
				</S.LoadingMessage>
			) : null}
			{newList.map(v => {
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
			<Pagination page={page} result={list} />
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
