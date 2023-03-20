import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function ContentFiltering({ pageFilter }) {
	const [searchParams, setSearchParams] = useSearchParams();

	const handleChange = e => {
		console.log(e, e.target);
		const value = e.target.value;
		searchParams.set('pageFilter', value);
		setSearchParams(searchParams);
	};

	return (
		<S.Wrapper onChange={handleChange}>
			<select value={searchParams.get('pageFilter')}>
				<option value={'byDate'}>최신순</option>
				<option value={'byComments'}>댓글순</option>
				<option value={'byCreated'}>생성순</option>
			</select>
		</S.Wrapper>
	);
}

export default ContentFiltering;

const Wrapper = styled.div`
	background-color: orange;
	margin-right: 5px;
`;

const S = {
	Wrapper,
};
