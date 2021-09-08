import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/images/logo2.png'
import Disney from '../public/images/disney-fifteens.jpg'
import Link from 'next/link'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import Swing from 'react-reveal/Swing'
import Pulse from 'react-reveal/Pulse'
import { BsEye } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'
import { GoQuote } from 'react-icons/go'
import {
  FaInstagram,
  FaYoutube,
  FaFacebook
} from 'react-icons/fa'
import {
  HiOutlineMenu,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from 'react-icons/hi'

const Container = ({ children }) => <div className="px-6 md:px-32 2xl:px-96">{children}</div>

const Header = () => (
  <header className="absolute top-0 w-full">
    <div>
      <div className="py-3 bg-black bg-opacity-40">
        <Container>
          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <div className="flex flex-col gap-2 text-gray-200 md:flex-row md:gap-4">
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
              <li><a target="_blank" href="https://www.facebook.com/afeturviagens" className="text-white"><FaFacebook /></a></li>
              <li><a target="_blank" href="https://www.instagram.com/afeturturismo/" className="text-white"><FaInstagram /></a></li>
              <li><a target="_blank" href="https://www.youtube.com/channel/UCBxGzFyOaX2I2K6aSBJJRFQ" className="text-white"><FaYoutube /></a></li>
            </ul>
          </div>
        </Container>
      </div>

      <div className="py-4 border-b border-gray-700">
        <Container>
          <div className="flex justify-between items-center">
            <Link href="/"><a className="flex items-center"><Image src={Logo} width="130px" height="60px" /></a></Link>
            <HiOutlineMenu className="text-white text-2xl md:hidden" />
            <nav className="hidden md:block">
              <ul className="list flex items-center gap-6 text-white font-medium text-lg">
                <li><Link href="#">
                  <a className="flex items-center">Pacotes <IoMdArrowDropdown className="ml-1" /></a></Link>
                </li>
                <li><Link href="#"><a>Quem Somos</a></Link></li>
                <li><Link href="#"><a>Ingressos</a></Link></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li><Link href="#"><a>Fale Conosco</a></Link></li>
                <Link href="#">
                  <a className="flex items-center bg-red-600 px-4 py-2 rounded transition-all duration-300 hover:bg-red-800">
                    <AiOutlineUser className="mr-1" /> Área do Cliente
                  </a>
                </Link>
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    </div>

    <style jsx>{`
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

const BudgeCard = () => (
  <Swing>
    <div className="budge-card mt-8 w-full p-6 shadow-lg opacity-90 rounded md:mt-16">
      <h2 className="text-center font-medium text-xl uppercase text-white">Faça já seu orçamento</h2>
      <form className="mt-8">
        <div className="grid gap-4">
          <div>
            <label className="text-white">Nome:</label>
            <input type="text" name="Test" placeholder="Digite seu nome" className="border rounded outline-none w-full px-2 py-1" />
          </div>
          <div>
            <label className="text-white">E-mail:</label>
            <input type="text" name="Test" placeholder="Digite seu email" className="border rounded outline-none w-full px-2 py-1" />
          </div>
          <div>
            <label className="text-white">Telefone:</label>
            <input type="text" name="Test" placeholder="Digite seu telefone" className="border rounded outline-none w-full px-2 py-1" />
          </div>
          <div>
            <label className="text-white">Assunto:</label>
            <input type="text" name="Test" className="border rounded outline-none w-full px-2 py-1" />
          </div>
          <div>
            <label className="text-white">Estado:</label>  
            <input type="text" name="Test" className="border rounded outline-none w-full px-2 py-1" />
          </div>
          <div>
            <label className="text-white">Cidade:</label>
            <input type="text" name="Test" className="border rounded outline-none w-full px-2 py-1" />
          </div>
          <div className="row-start-3 col-span-3">
            <label className="text-white">Bairro:</label>
            <input type="text" name="Test" placeholder="Digite seu bairro" className="border rounded outline-none w-full px-2 py-1" />
          </div>
          <div className="row-start-4 col-span-3">
            <label className="text-white">Detalhes do seu orçamento: </label>
            <textarea className="rounded w-full px-2 py-3 outline-none" placeholder="Ex.: Origem, destino, data de ida, data de volta, quantidade de pessoas, entre outros detalhes que achar importantes."></textarea>
          </div>
        </div>
        <button className="mt-4 bg-white px-4 py-2 w-full bg-red-600 text-white font-medium transition-all duration-300 rounded hover:bg-red-800">
          Fazer Orçamento
        </button>
      </form>
    </div>

    <style jsx>{`
      .budge-card {
        background-color: #29285D;
      }
    `}</style>
  </Swing>
)

const HeroSection = () => (
  <section className="hero-section relative pb-4 flex md:items-center">
    <Header />

    <Container>
      <div className="relative flex flex-col mt-40 md:flex-row md:items-center md:mt-24">
        <div className="col mt-24 md:mt-0 md:w-3/4">
          <Pulse>
            <h1 className="flex flex-col text-white font-bold">
              <span className="uppercase tracking-widest text-lg ml-1">
                <span className="text-red-600 mb-1 inline-block">Afetur</span> Viagens e Turismo
              </span>
              <span className="text-5xl md:text-7xl">Realize a sua viagem dos sonhos...</span>
            </h1>
          </Pulse>
          <div className="flex flex-col gap-x-3 gap-y-2 mt-5 md:flex-row md:items-center md:mt-6">
            <Pulse>
              <button className="px-5 py-2 font-medium bg-red-600 text-white rounded w-full rounded-full transition-all duration-300 md:w-auto md:rounded md:px-8 hover:bg-red-800">
                Ver Pacotes
              </button>
            </Pulse>
            <Pulse>
              <button className="bg-white px-5 py-2 font-medium text-gray-700 rounded w-full rounded-full transition-all duration-300 md:w-auto md:rounded hover:bg-gray-300">
                Quem Somos ?
              </button>
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
          url('/images/bg.jpg'
        );
        background-position: center;
        background-repeat: no-repeat;
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
    <div className="relative flex flex-col items-center text-center bg-white opacity-80 rounded-lg px-12 py-8">
      <GoQuote className="text-4xl text-gray-400" />
      <p className="text-gray-500 mt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <div>
        {/* Stars */}
      </div>
      
      <div className="absolute left-1/2">
        {/* <Image src={} /> */}
        {/* <span>Name</span> */}
      </div>
    </div>
  </Flip>
)

const TestimonialSection = () => (
  <section className="testimonial-section flex items-center py-28">

    <Container>
      <div className="grid md:grid-cols-3 gap-6">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </Container>

    <style jsx>{`
      .testimonial-section {
        background-image: url('/images/testimonial.jpg');
        background-position: center;
        background-repeat: no-repeat;
        min-height: 600px;
      }
    `}</style>
  </section>
)

const BlogPostCard = () => (
  <div className="rounded md:row-span-4 md:col-span-2">
    1
  </div>
)

const BlogSection = () => (
  <section className="py-48">
    <Container>
      <div className="grid gap-2 md:grid-rows-4 md:grid-cols-4">
        <div className="relative rounded md:row-span-4 md:col-span-2">
          {/* <Image src="https://www.afetur.com.br/wp-content/uploads/elementor/thumbs/egito-paryivicqpgdqg6rsljg8roylftwvcrlkqg4qrt18s.jpg" layout="fill" objectFit="cover" /> */}
        </div>
        <div className="rounded"></div>
        <div className="rounded"></div>
        <div className="rounded"></div>
        <div className="rounded"></div>
      </div>
    </Container>
  </section>
)

const Package = ({ src }) => (
  <div>
    <Zoom>
      <div className="relative py-32">
        <Image src={src} layout="fill" className="transition-all hover:opacity-80" />
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
          <button className="mt-5 rounded-full px-5 py-2 text-white flex items-center text-sm" style={{ backgroundColor: '#181E84' }}>
            <BsEye className="mr-2" /> Ver pacote
          </button>
        </div>
    </Zoom>
  </div>
)

const Footer = () => (
  <footer className="footer py-20">
    <Container>
      <div className="flex flex-col gap-6 text-white md:flex-row">
        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          <div>
            <h3 className="font-medium text-lg">Fale Conosco</h3>
            <ul>
              <li>Link 1</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg">Novidades</h3>
            <ul>
              <li>Link 1</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg">Sobre</h3>
            <ul>
              <li>Link 1</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-lg">Compartilhe</h3>
          <ul className="flex gap-3 mt-2">
            <li><a target="_blank" href="#"><FaFacebook className="text-2xl" /></a></li>
            <li><a target="_blank" href="#"><FaInstagram className="text-2xl" /></a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <hr />
        <div className="mt-6 text-white">
          © Todos os direitos reservados por Afetur Turismo
        </div>
      </div>
    </Container>

    <style jsx>{`
      .footer {
        background-image: url('/images/bg-footer.jpg');
        background-position: center;
        background-repeat: no-repeat;
      }
    `}</style>
  </footer>
)

const MobileNav = () => (
  <nav className="fixed h-full top-0 left-0 bg-white w-4/5 z-90">
    ds
  </nav>
)

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Home - Afetur - Agência de Viagens</title>
        <meta name="description" content="Generated by create next app" />
        <script src='https://llwhatsapp.blob.core.windows.net/whatschat-scripts/whatschat-42032d6f97ad481ca590d5ebfc45102a.js'></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />

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
              <button className="rounded-full bg-white px-4 py-1 mt-8 text-pink-500 uppercase">
                Saiba Mais
              </button>
            </div>
            <div className="col relative">
              <div className="absolute">
                <Zoom>
                  <Image src={Disney} alt="Disney Fifteens" />
                </Zoom>
              </div>
            </div>
          </div>
        </Container>

        <style jsx>{`
          .disney {
            background-image: url('/images/bg-disney.jpg');
            background-position: center;
            background-repeat: no-repeat;
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

      <TestimonialSection />

      <BlogSection />

      <Footer />
    </div>
  )
}