import styled from 'styled-components';

// 작업중...!!
function Pagination({ result, page, setPage }) {
	const page1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const page2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	const nextPage = () => {
		if (page > 19) return;
		setPage(page + 1);
	};

	const prevPage = () => {
		if (page <= 1) return;
		setPage(page - 1);
	};

	const dividePage = page <= 10 ? page1 : page2;

	const firstPage = () => {
		setPage(1);
	};

	const lastPage = () => {
		setPage(20);
	};

	return (
		<S.Flex>
			<button onClick={firstPage}>맨처음</button>
			<button onClick={prevPage}>이전</button>
			<div>
				{dividePage.map(p => {
					return (
						<button
							onClick={() => {
								setPage(p);
							}}
							style={{ color: page === p ? 'red' : 'black' }}
						>
							{p}
						</button>
					);
				})}
			</div>
			<button onClick={nextPage}>다음</button>
			<button onClick={lastPage}>맨끝</button>
		</S.Flex>
	);
}

export default Pagination;

const Flex = styled.div`
	width: 50%;
	margin: 0 auto;
	display: flex;
	padding: 40px;
	justify-content: space-between;
`;

const S = {
	Flex,
};

/*
import React, { useState } from 'react';

function Pagination({ itemsPerPage, data, backward }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  return (
    <div>
      <ul>{currentItems.map((item) => <li key={item}>{item}</li>)}</ul>
      <ul id="page-numbers">{renderPageNumbers}</ul>
      <button onClick={backward}>Backward</button>
    </div>
  );
}

export default Pagination;
*/
