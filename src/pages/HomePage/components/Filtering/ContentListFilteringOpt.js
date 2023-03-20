import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function ContentListFiltering({ perPage }) {
	const [searchParams, setSearchParams] = useSearchParams();

	const handleChange = e => {
		console.log(e, e.target);
		const value = e.target.value;
		searchParams.set('filter', value);
		setSearchParams(searchParams);
	};

	return (
		<S.Wrapper>
			<select value={Number(searchParams.get('filter'))}>
				<option value={10}>10개씩</option>
				<option value={20}>20개씩</option>
				<option value={50}>50개씩</option>
			</select>
		</S.Wrapper>
	);
}

export default ContentListFiltering;

const Wrapper = styled.div`
	background-color: orange;
`;

const S = {
	Wrapper,
};
