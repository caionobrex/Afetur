import Head from 'next/head'
import Link from 'next/link'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import Pulse from 'react-reveal/Pulse'
import BudgeCard from '../components/budgetCard'
import Footer from '../components/footer'
import { BsEye } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineUser, AiFillStar } from 'react-icons/ai'
import { GoQuote } from 'react-icons/go'
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTimes
} from 'react-icons/fa'
import {
  HiOutlineMenu,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from 'react-icons/hi'
import { useState } from 'react'

const Container = ({ children }) => <div className="px-6 md:px-32 2xl:px-96">{children}</div>

const Header = ({ openMobileNav }) => {
  return (
    <header className="absolute top-0 w-full">
      <div>
        <div className="information-header py-3">
          <Container>
            <div className="flex flex-col justify-between md:flex-row md:items-center">
              <div className="flex flex-col gap-2 text-gray-100 md:flex-row md:gap-4">
                <span className="flex items-center">
                  <HiOutlinePhone className="mr-1 text-lg" /> (85) 99976-5157
                </span>
                <span className="hidden md:inline">|</span>
                <span className="flex items-center">
                  <HiOutlineMail className="mr-1 text-lg" /> contato@afetur.com.br
                </span>
                <span className="hidden md:inline">|</span>
                <span className="flex items-center">
                  <HiOutlineLocationMarker className="mr-1 text-lg" /> Rua General Tertuliano Potiguara, 1064
                </span>
              </div>
              <ul className="flex items-center gap-3 text-xl rounded py-1 mt-2 md:mt-0">
                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/afeturviagens" className="text-white"><FaFacebook /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/afeturturismo/" className="text-white"><FaInstagram /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCBxGzFyOaX2I2K6aSBJJRFQ" className="text-white"><FaYoutube /></a></li>
              </ul>
            </div>
          </Container>
        </div>

        <div className="py-4 border-b border-gray-700 w-full" style={{ transition: 'padding, 300ms, background 300ms' }}>
          <Container>
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="flex items-center">
                  <img src="https://www.afetur.com.br/wp-content/uploads/2021/09/logo2.png" alt="Logo Afetur Fortaleza" width="130px" height="60px" style={{ zIndex: 999 }} />
                </a>
              </Link>
              <HiOutlineMenu className="text-white text-2xl md:hidden" onClick={openMobileNav} style={{ zIndex: 999 }} />
              <nav className="hidden md:block">
                <ul className="list flex items-center gap-6 text-white font-medium text-lg">
                  <li>
                    <a href="#" className="flex items-center">Pacotes <IoMdArrowDropdown className="ml-1" /></a>
                  </li>
                  <li><Link href="/quem-somos"><a href="#">Quem Somos</a></Link></li>
                  <li><a href="#">Ingressos</a></li>
                  <li><Link href="/blog"><a>Blog</a></Link></li>
                  <li><a href="#">Fale Conosco</a></li>
                  <a href="http://afetur.com.br/defaultclientes.asp" className="flex items-center bg-red-600 px-4 py-2 rounded transition-all duration-300 hover:bg-red-800">
                    <AiOutlineUser className="mr-1" /> Área do Cliente
                  </a>
                </ul>
              </nav>
            </div>
          </Container>
        </div>
      </div>

      <style jsx>{`
        .information-header {
          background-color: #29285D;
        }

        .list li { position: relative; }
        .list li:hover::after { opacity: 1; }
        .list li::after {
          content: "";
          opacity: 0;
          padding: 1px;
          background-color: white;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          transition: all 0.2s ease-in;
        }
      `}</style>
    </header>
  )
}

const HeroSection = ({ openMobileNav }) => (
  <section className="hero-section relative pb-4 flex md:items-center">
    <Header openMobileNav={openMobileNav} />

    <Container>
      <div className="relative flex flex-col mt-40 md:flex-row md:items-center md:mt-24">
        <div className="col mt-24 md:mt-0 md:w-3/4">
          <Pulse>
            <h1 className="flex flex-col text-white font-bold">
              <span className="uppercase tracking-widest text-md ml-1 md:text-lg">
                <span className="text-red-600 mb-1 inline-block">Afetur</span> Viagens e Turismo
              </span>
              <span className="text-5xl md:text-7xl">Realize a sua viagem dos sonhos...</span>
            </h1>
          </Pulse>
          <div className="flex flex-col gap-x-3 gap-y-2 mt-5 md:flex-row md:items-center md:mt-6">
            <Pulse>
              <Link href="/pacotes">
                <a className="px-5 py-2 font-medium bg-red-600 text-white rounded w-full block flex justify-center items-center rounded-full transition-all duration-300 md:w-auto md:rounded md:px-8 hover:bg-red-800">
                  Ver Pacotes
                </a>
              </Link>
            </Pulse>
            <Pulse>
              <Link href="/quem-somos">
                <a className="bg-white px-5 py-2 font-medium text-gray-700 rounded w-full block flex justify-center items-center rounded-full transition-all duration-300 md:w-auto md:rounded hover:bg-gray-300">
                  Quem Somos ?
                </a>
              </Link>
            </Pulse>
          </div>
        </div>
        <div className="col">
          <BudgeCard />
        </div>
      </div>
    </Container>

    <style jsx>{`
      .hero-section {
        background-image: linear-gradient(
          to right bottom,
          rgba(0,0,0,0.5),
          rgba(0,0,0,0.2)),
          url('https://www.afetur.com.br/wp-content/uploads/2021/07/pacotes-de-viagens-afetur-turismo-fortaleza-ceara.jpg'
        );
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 85vh;
      }

      .col { flex-basis: 100%; }

      @media only screen and (min-width: 768px) {
        .hero-section {
          background-position: left center;
        }
      }
    `}</style>
  </section>
)

const TestimonialCard = () => (
  <Flip left>
    <div className="relative flex flex-col items-center text-center bg-gray-100 bg-opacity-80 rounded-lg px-12 py-8">
      <GoQuote className="text-4xl text-gray-400" />
      <p className="text-gray-700 mt-6">
        Já fiz três viagens com a Afetur. É irrepreensível o tratamento e a responsabilidade dos guias,
        médicos que acompanham e todo o staff da empresa.
        Parabéns amigos já estou me programando para próxima viagem.
      </p>
      <div className="flex items-center gap-2 text-xl mt-5">
        <AiFillStar className="text-yellow-400" />
        <AiFillStar className="text-yellow-400" />
        <AiFillStar className="text-yellow-400" />
        <AiFillStar className="text-yellow-400" />
        <AiFillStar className="text-yellow-400" />
      </div>
      
      <div className="mt-6">
        <div className="flex flex-col items-center">
          <img src="https://www.afetur.com.br/wp-content/uploads/2021/07/jose-nelson-carrozzinho-filho-200x200-1.jpg" width="70px" height="70px" className="rounded-full" />
          <span className="font-medium text-gray-600 mt-2">José Nelson Carrozzino Filho</span>
        </div>
      </div>
    </div>
  </Flip>
)

const TestimonialSection = () => {
  return (
    <section className="testimonial-section flex items-center py-28">

      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </Container>

      <style jsx>{`
        .testimonial-section {
          background-image: url('https://www.afetur.com.br/wp-content/uploads/2021/07/depoimentos.jpg');
          background-size: cover;
          background-position: top center;
          background-repeat: no-repeat;
          min-height: 600px;
        }

        @media only screen and (min-width: 768px) {
          .testimonial-section {
            background-position: center center;
          }
        }
      `}</style>
    </section>
  )
}

const BlogPostCard = () => (
  <div className="rounded md:row-span-4 md:col-span-2">
    1
  </div>
)

const BlogSection = () => (
  <section className="py-8">
    <Container>
      <div className="grid gap-2 md:grid-rows-4 md:grid-cols-4">
        <div className="relative rounded md:row-span-4 md:col-span-2">
          <img src="https://www.afetur.com.br/wp-content/uploads/2021/07/post-blog4.jpg" alt="Blog Post" className="rounded h-full" />
          <div className="absolute flex items-end top-0 w-full h-full bg-black bg-opacity-30 text-white">
            <h3></h3>
          </div>
        </div>
        <div className="relative rounded relative md:row-span-2">
          <img src="https://www.afetur.com.br/wp-content/uploads/2021/07/familia1.jpeg" alt="Blog Post" className="rounded" />
          <div className="absolute flex items-end top-0 w-full h-full bg-black bg-opacity-30 text-white">
            <h3></h3>
          </div>
        </div>
        <div className="relative rounded relative md:row-span-2">
          <img src="https://www.afetur.com.br/wp-content/uploads/2021/07/familia1.jpeg" alt="Blog Post" className="rounded" />
          <div className="absolute flex items-end top-0 w-full h-full bg-black bg-opacity-30 text-white">
            <h3></h3>
          </div>
        </div>
        <div className="relative rounded relative md:row-span-2">
          <img src="https://www.afetur.com.br/wp-content/uploads/2021/07/familia1.jpeg" alt="Blog Post" className="rounded" />
          <div className="absolute flex items-end top-0 w-full h-full bg-black bg-opacity-30 text-white">
            <h3></h3>
          </div>
        </div>
        <div className="relative rounded relative md:row-span-2">
          <img src="https://www.afetur.com.br/wp-content/uploads/2021/07/familia1.jpeg" alt="Blog Post" className="rounded" />
          <div className="absolute flex items-end top-0 w-full h-full bg-black bg-opacity-30 text-white">
            <h3></h3>
          </div>
        </div>
      </div>
    </Container>
  </section>
)

const Package = ({ src }) => (
  <div>
    <Zoom>
      <div>
        <img src={src} className="transition-all hover:opacity-80" />
      </div>
        <div className="flex flex-col items-center mt-2">
          <h3 className="text-center font-bold text-xl mt-3" style={{ color: '#07218B' }}>
            Paris Gourmet
          </h3>
          <div className="text-center mt-4 text-gray-500 font-medium">
            <span className="block">A partir de:</span>
            <span className="block font-bold text-2xl" style={{ color: '#07218B' }}>2.029€</span>
            <span className="block">9 diárias</span>
          </div>
          <Link href="/pacotes/sd">
            <a className="mt-5 rounded-full px-5 py-2 text-white flex items-center text-sm" style={{ backgroundColor: '#181E84' }}>
              <BsEye className="mr-2" /> Ver pacote
            </a>
          </Link>
        </div>
    </Zoom>
  </div>
)

const MobileNav = ({ closeMobileNav }) => (
  <nav className="fixed h-full top-0 left-0 w-4/5 bg-gray-50" onClick={closeMobileNav}>
    <FaTimes className="absolute top-0 right-0 text-gray-700 text-xl" />

    <a href="http://afetur.com.br/defaultclientes.asp" className="flex items-center bg-red-600 px-4 py-2 rounded transition-all duration-300 text-white m-4 mt-10 hover:bg-red-800">
      <AiOutlineUser className="mr-1" /> Área do Cliente
    </a>

    <ul className="flex flex-col gap-3 font-medium mt-4">
      <li className="px-4">
        <a href="#" className="flex items-center">Pacotes</a>
      </li>
      <li className="px-4"><a href="#">Quem Somos</a></li>
      <li className="px-4"><a href="#">Ingressos</a></li>
      <li className="px-4"><a href="#">Blog</a></li>
      <li className="px-4"><a href="#">Fale Conosco</a></li>
    </ul>
    
    <style jsx>{`
      nav {
        z-index: 1000;
      }
    `}</style>
  </nav>
)

export default function Home({ test }) {
  const [isOpen, setIsOpen] = useState(false)

  const openMobileNav = () => {
    document.body.style.overflowY = 'hidden'
    setIsOpen(true)
  }

  const closeMobileNav = () => {
    document.body.style.overflowY = 'auto'
    setIsOpen(false)
  }

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Home - Afetur - Agência de Viagens</title>
        <meta name="description" content="Aéreo Hospedagens Pacotes Aéreo Hospedagens Pacotes Clique aqui CONVENÇÃO ROTARY Pacotes em Destaque Paris Gourmet A partir de: 2.029&euro; 9 diárias Ver pacote Maldivas e Dohas A partir de: 3.159&euro; 9 diárias Ver pacote Egito Eterno A partir de: 1.735&euro; 9 diárias Ver pacote DISNEY FIFTEENS A Disney é realmente um destino diferenciado que mexe [&hellip;]" />
        <script src='https://llwhatsapp.blob.core.windows.net/whatschat-scripts/whatschat-42032d6f97ad481ca590d5ebfc45102a.js'></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {isOpen && <MobileNav closeMobileNav={closeMobileNav} />}

      <HeroSection openMobileNav={openMobileNav} />

      <div className="py-12">
        <Container>
          <h2 className="text-center text-3xl font-semibold text-gray-600">Pacotes em Destaque</h2>
          <div className="grid gap-5 gap-y-10 mt-12 md:grid-cols-3">
            <Package src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/maldivas-2-paryiybvb7k8pa2oc4rby8zcdlg0ig2sl4el6louq4.jpg" />
            <Package src="https://www.afetur.com.br/wp-content/uploads/2016/05/tour-2.jpg" />
            <Package src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/egito-paryivicqpgdqg6rsljg8roylftwvcrlkqg4qrt18s.jpg" />
          </div>
        </Container>
      </div>

      <div className="disney py-16">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="text-white col">
              <Zoom>
                <h2 className="text-4xl font-bold md:text-5xl">DISNEY FIFTEENS</h2>
              </Zoom>
              <p className="mt-4">
                A Disney é realmente um destino diferenciado que mexe com a fantasia da adolescente,
                com o sonho e com as expectativas de toda a família. É um ano de preparação e ansiedade que
                cercam essa incrível viagem.
              </p>
              <button className="w-full rounded bg-white px-5 py-2 mt-8 text-pink-500 font-semibold uppercase md:w-auto">
                Saiba Mais
              </button>
            </div>
            <div className="col relative">
              <div className="absolute">
                <Zoom>
                  <img src="https://www.afetur.com.br/wp-content/uploads/2021/07/disney-fifteens-viagem-para-disney-afetur-turismo.jpg" alt="Disney Fifteens" />
                </Zoom>
              </div>
            </div>
          </div>
        </Container>

        <style jsx>{`
          .disney {
            background-image: url('https://www.afetur.com.br/wp-content/uploads/2021/07/bg-disney.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .col { flex-basis: 100%; }
        `}</style>
      </div>

      <div className="pb-12 pt-48 md:pt-32">
        <Container>
          <h2 className="text-center text-3xl font-semibold text-gray-600">Pacotes Internacionais</h2>
          <div className="grid mt-12 gap-5 gap-y-10 md:grid-cols-3">
            <Package src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/cancun-1-paryirqzzdb8g0c8ejwxysn47wcg0kco87u6tnylxo.jpg" />
            <Package src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/suica-1-scaled-paryj7q97jx3xdp0t8tln6lybg5onf43yexfzdawzw.jpg" />
            <Package src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/puntacana-scaled-paryj4wqn1t8yjt49plpxpbkjajl0bswy0yzjjf3ik.jpg" />
          </div>
        </Container>
      </div>

      <div className="religion relative py-28 overflow-hidden text-white">
        <Container>
          <Zoom top>
            <div className="flex flex-col items-center gap-y-4">
              <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent md:text-5xl">
                ROTEIROS RELIGIOSOS
              </h2>
              <div>
                <a href="https://agenciaafetur.com.br/roteirosreligiosos/index.php" target="_blank" rel="noreferrer">
                  <img src="https://www.afetur.com.br/wp-content/uploads/2021/09/roteiros-religiosos-logo.png" alt="Logo Da Roteiros Religiosos" width="200px" height="100px" />
                </a>
              </div>
            </div>
          </Zoom>
          <div className="flex flex-col mt-12 gap-y-6 md:gap-4 md:gap-0 md:flex-row md:items-center">
            <div className="col">
              <Zoom left>
                <img src="https://www.afetur.com.br/wp-content/uploads/2021/09/roteiros-religiosos-intro.png" alt="Camelos Nuvens Passaros" />
              </Zoom>
            </div>
            <div className="col">
              <Zoom right>
                <div>
                  <h3 className="text-4xl text-center font-bold mb-4 md:text-left">O que é ?</h3>
                  <p className="text-justify">
                    É uma iniciativa da agência de viagens Afetur, uma agência especializada em viagens em grupo, e neste projeto a agência cria roteiros de viagens
                    religiosas com o objetivo de levar pessoas do Brasil para visitarem lugares históricos voltados ao público religioso.
                  </p>
                  <a
                    href="https://agenciaafetur.com.br/roteirosreligiosos/index.php"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-white mt-6 rounded px-6 py-3 inline-block uppercase font-semibold text-center md:w-auto"
                  >
                    Saiba Mais
                  </a>
                </div>
              </Zoom>
            </div>
          </div>
        </Container>

        <style jsx>{`
          .religion {
            background-image: linear-gradient(
              to right,
              rgba(0,0,0,0.8),
              rgba(0,0,0,0.8)
            ),
            url('https://www.afetur.com.br/wp-content/uploads/2021/09/bg-religion.jpg');
            background-size: cover;
          }
          .religion h2 {
            background-image: linear-gradient(to right, #8d4fff, #8d4fff, #fa9e1b, #fa9e1b, #8d4fff, #8d4fff);
          }
          .religion::before {
            content: "";
            position: absolute;
            top: -50px;
            left: -50px;
            background-color: #F3F4F6;
            width: 150px;
            height: 150px;
            border-radius: 999px;
          }
          .religion::after {
            content: "";
            position: absolute;
            top: -50px;
            right: -50px;
            background-color: #F3F4F6;
            width: 150px;
            height: 150px;
            border-radius: 999px;
          }

          @media only screen and (min-width: 768px) {
            .religion::before {
              width: 250px;
              height: 250px;
            }
            .religion::after {
              width: 250px;
              height: 250px;
            }
          }

          .religion a {
            background-image: linear-gradient(to right, #fa9e1b, #8d4fff);
          }
          .col { flex-basis: 100%; }
        `}</style>
      </div>

      <BlogSection />

      <TestimonialSection />

      <Footer />
    </div>
  )
}

export function getStaticProps() {
  return {
    props: { test: 'test' }
  }
}