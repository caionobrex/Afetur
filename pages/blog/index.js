import Container from "../../components/Container"
import Layout from "../../components/layout"

const PostCard = () => (
  <div>
    <div>
      <img src="https://www.afetur.com.br/wp-content/uploads/2021/09/peru-machu-1024x731.jpg" />
    </div>
    <h1 className="uppercase mt-2 font-bold text-gray-700">Title</h1>
    <span className="text-gray-500 text-sm">12/06</span>
    <p className="mt-2 text-gray-700">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
  </div>
)

export default function Blog({ posts }) {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-x-6 py-12 md:flex-row">
          <div style={{ width: '70%' }}>
            <ul className="flex flex-col gap-y-12">
              <li><PostCard /></li>
              <li><PostCard /></li>
              <li><PostCard /></li>
              <li><PostCard /></li>
            </ul>
          </div>

          <div className="flex-1">
            {/* Categories
            <ul>
              <li className="">Categoria 1</li>
              <li className="">Categoria 2</li>
              <li className="">Categoria 3</li>
              <li className="">Categoria 4</li>
            </ul> */}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const [posts, categories] = await Promise.all([
    (await fetch('http://localhost:3000/api/posts')).json(),
    (await fetch('http://localhost:3000/api/categories')).json()
  ])
  return { props: { posts, categories }}
}