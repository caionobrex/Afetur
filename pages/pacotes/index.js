import Container from "../../components/Container"
import Layout from "../../components/layout"
import Package from "../../components/package"

export default function Pacotes({ pacotes }) {
  return (
    <Layout>
      <Container>
        <div className="flex gap-2">
          <div className="hidden first-col min-h-screen py-12 border-r flex-col gap-y-4 md:flex md:px-4">
            <div>
              <h3 className="text-gray-700 font-medium">Categorias</h3>
              <select className="w-full border mt-1">
                <option>cat 1</option>
                <option>cat 2</option>
                <option>cat 3</option>
                <option>cat 4</option>
              </select>
            </div>
            <div>
              <h3 className="text-gray-700 font-medium">Preço</h3>
            </div>
            <div>
              <h3 className="text-gray-700 font-medium">Tags</h3>
            </div>
          </div>

          <div className="flex-1 py-12">
            <ul className="grid gap-x-3 gap-y-12 md:grid-cols-3 md:px-4">
              <li>
                <Package src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/maldivas-2-paryiybvb7k8pa2oc4rby8zcdlg0ig2sl4el6louq4.jpg" />
              </li>
              <li>
                <Package src="https://www.afetur.com.br/wp-content/uploads/2016/05/tour-2.jpg" />
              </li>
              <li>
                <Package src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/egito-paryivicqpgdqg6rsljg8roylftwvcrlkqg4qrt18s.jpg" />
              </li>
              <li>
                <Package src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/maldivas-2-paryiybvb7k8pa2oc4rby8zcdlg0ig2sl4el6louq4.jpg" />
              </li>
              <li>
                <Package src="https://www.afetur.com.br/wp-content/uploads/2016/05/tour-2.jpg" />
              </li>
              <li>
                <Package src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/egito-paryivicqpgdqg6rsljg8roylftwvcrlkqg4qrt18s.jpg" />
              </li>
              <li>
                <Package src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/maldivas-2-paryiybvb7k8pa2oc4rby8zcdlg0ig2sl4el6louq4.jpg" />
              </li>
              <li>
                <Package src="https://www.afetur.com.br/wp-content/uploads/2016/05/tour-2.jpg" />
              </li>
              <li>
                <Package src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/egito-paryivicqpgdqg6rsljg8roylftwvcrlkqg4qrt18s.jpg" />
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .first-col {
          flex: 0 1 15%;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const [pacotes, categories] = await Promise.all([
    (await fetch('http://localhost:3000/api/pacotes')).json(),
    (await fetch('http://localhost:3000/api/categories')).json()
  ])
  return { props: { pacotes, categories } }
}