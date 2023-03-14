import { useEffect, useState } from 'react'
import { Octokit } from 'octokit'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
	const { id } = useParams()
	const [result, setResult] = useState()

	const getIssue = async () => {
		const octokit = new Octokit({
			auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
		})

		const result = await octokit.request(
			`GET /repos/angular/angular-cli/issues/${id}`,
			{
				owner: 'OWNER',
				repo: 'REPO',
				issue_number: id,
				headers: {
					// 깃허브에 담아보내는거
				},
			},
		)
		setResult(result.data)
		console.log(result)
	}
	useEffect(() => {
		getIssue()
	}, [id])

	return (
		<div>
			디테일페이지{id}
			{JSON.stringify(result)}
		</div>
	)
}

export default DetailPage
