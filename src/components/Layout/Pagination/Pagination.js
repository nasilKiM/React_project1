import { useLocation, useNavigate } from 'react-router-dom';

function Pagination2({ total, limit, page }) {
	console.log(total, limit, page);
	const numPages = Math.ceil(total / limit);

	const startPage = Math.floor((page - 1) / 10) * 10 + 1;
	let endPage = startPage + 10 - 1;
	if (endPage >= numPages) endPage = numPages;

	const navigate = useNavigate(); // url 경로 이동용 내비게이션

	function createArray(start, end) {
		let arr = [];
		for (let i = start; i <= end; i++) {
			arr.push(i);
		}
		return arr;
	}

	const currentLocation = useLocation()
		.pathname.split('/')
		.slice(0, 3)
		.join('/');

	const setPage = number => {
		navigate(`${currentLocation}/${number}/${limit}`);
	};

	return (
		<>
			<div>
				<button onClick={() => setPage(1)} disabled={Number(page) === 1}>
					{`맨앞`}
				</button>
				<button onClick={() => setPage(page - 1)} disabled={Number(page) === 1}>
					{`<`}
				</button>
				{createArray(startPage, endPage)
					.fill()
					.map((_, i) => (
						<button
							key={i + startPage}
							id={i + 1}
							onClick={() => setPage(i + startPage)}
							aria-current={Number(page) === i + startPage ? 'page' : null}
						>
							{i + startPage}
						</button>
					))}
				<button
					onClick={() => setPage(Number(page) + 1)}
					disabled={Number(page) === numPages}
				>
					{`>`}
				</button>
				<button
					onClick={() => setPage(numPages)}
					disabled={Number(page) === numPages}
				>
					{`맨뒤`}
				</button>
			</div>
		</>
	);
}

export default Pagination2;
