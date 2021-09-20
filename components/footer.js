import Container from "./Container"
import {
  FaInstagram,
  FaYoutube,
  FaFacebook
} from 'react-icons/fa'
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="footer py-20">
      <Container>
        <div className="flex flex-col gap-6 text-white md:flex-row">
          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            <div>
              <h3 className="font-medium text-lg">Fale Conosco</h3>
              <ul className="flex flex-col gap-2 mt-2 text-gray-300 md:mt-4">
                <li className="flex items-center">
                  <HiOutlinePhone className="mr-1 text-lg" /> (85) 99976-5157
                </li>
                <li className="flex items-center">
                  <HiOutlineMail className="mr-1 text-lg" /> contato@afetur.com.br
                </li>
                <li className="flex items-center">
                  <HiOutlineLocationMarker className="mr-1 text-lg" /> Rua General Tertuliano Potiguara, 1064
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg">Novidades</h3>
              <ul className="flex flex-col gap-2 mt-2 text-gray-300 md:mt-4">
                <li><a href="#">Viagem da Amizade</a></li>
                <li><a href="#">Disney Fifteens</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg">Sobre</h3>
              <ul className="mt-2 text-gray-300 md:mt-4">
                <li><a href="#">Quem somos</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg">Compartilhe</h3>
            <ul className="flex flex-col gap-2 mt-2 text-gray-300 md:mt-4">
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/afeturviagens" className="flex items-center gap-2">
                  <FaFacebook className="text-xl text-white" /> Facebook
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/afeturturismo/" className="flex items-center gap-2">
                  <FaInstagram className="text-xl text-white" /> Instagram
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCBxGzFyOaX2I2K6aSBJJRFQ" className="flex items-center gap-2">
                  <FaYoutube className="text-xl text-white" /> Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <hr />
          <div className="flex flex-col justify-between gap-2 text-gray-300 text-sm mt-6 md:flex-row">
            <span>© Todos os direitos reservados por Afetur Turismo</span>
            <span>Desenvolvido com ❤ por David Magalhães</span>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .footer {
          background-image: url('https://www.afetur.com.br/wp-content/uploads/2021/07/bg-footer.jpg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </footer>
  )
}