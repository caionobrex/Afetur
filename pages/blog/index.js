import Container from "../../components/Container"
import Layout from "../../components/layout"

export default function Blog({ posts }) {
  return (
    <Layout>
      <Container>
        <div className="py-6">
          {posts.length}
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()
  return { props: { posts }}
}