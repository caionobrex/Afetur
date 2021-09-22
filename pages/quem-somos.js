import Layout from "../components/layout"
import Container from "../components/Container"

export default function About() {
  return (
    <Layout>
      <Container>
        <div className="py-12">
          <h2 className="text-6xl font-medium text-gray-800 text-center">Quem Somos ?</h2>
          <p className="mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </Container>
    </Layout>
  )
}