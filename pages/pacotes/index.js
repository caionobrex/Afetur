import Container from "../../components/Container"
import Layout from "../../components/layout"
import Package from "../../components/package"

export default function Pacotes({ pacotes }) {
  return (
    <Layout>
        <div className="flex gap-4 px-4 md:px-8">
          <div className="hidden first-col min-h-screen py-8 border-r md:block">
          </div>
          <div className="flex-1 py-8">
            <ul className="grid gap-3 gap-y-8 md:grid-cols-3">
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
      <style jsx>{`
        .first-col {
          flex: 0 1 20%;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/pacotes')
  const pacotes = await res.json()
  return {
    props: { pacotes }
  }
}