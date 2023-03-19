import { useState } from 'react';
import styled from 'styled-components';

function ContentListFiltering({ onChange }) {
	const [value, setValue] = useState(10);

	const handleChange = e => {
		const value = e.target.value;
		setValue(value);
		onChange(value);
	};

	return (
		<S.Wrapper>
			<select value={value} onChange={handleChange}>
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
