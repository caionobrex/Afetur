import Container from "../../components/Container"
import Layout from "../../components/layout"

export default function Pacote({ slug }) {
  return (
    <Layout>
      <div className="py-8">
        <Container>
          Pacote {slug}
        </Container>
      </div>
    </Layout>
  )
}

export function getServerSideProps(context) {
  return { props: { slug: context.query.slug } }
}