import Fork from '../components/Fork'
import Todo from '../components/Todo'
import Nav from '../components/Nav'
import Form from '../components/Form'

export default function Index({ stars }) {
	return (
		<main>
			{/* <Fork stars={stars} /> */}
			{/* <Todo /> */}
      <Nav></Nav>
      <Form></Form>
		</main>
	)
}

export async function getServerSideProps() {
	try {
		const res = await fetch(
			'https://api.github.com/repos/ooade/NextSimpleStarter'
		)
		const json = await res.json()

		return {
			props: {
				stars: json.stargazers_count,
			},
		}
	} catch (error) {
		return {
			props: {
				stars: 0,
			},
		}
	}
}
