import Container from "../../components/Container"
import Layout from "../../components/layout"

export default function Post({ posts }) {
  return (
    <Layout>
      <Container>
        <div className="py-6">
          Blog Post
        </div>
      </Container>
    </Layout>
  )
}