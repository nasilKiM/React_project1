import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentBoard from './components/CommentBoard';
import CommentInput from './components/CommentInput';
import IssueDetail from './components/IssueDetail';

const DetailPage = () => {
	const { number } = useParams();
	console.log(number);
	const state = useSelector(state => state.issue.details);

	return (
		<div>
			{state && <IssueDetail number={number} />}
			<CommentBoard number={number} />
			<CommentInput />
		</div>
	);
};

export default DetailPage;
