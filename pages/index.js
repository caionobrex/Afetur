import Head from 'next/head'
import Image from 'next/image'
import Disney from '../public/images/disney-fifteens.jpg'
import Tour2 from '../public/images/tour-2.jpg'
import Link from 'next/link'
import Zoom from 'react-reveal/Zoom'
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

const Container = ({ children }) => <div className="px-6 md:px-32 2xl:px-48">{children}</div>

const Header = () => (
  <header className="absolute top-0 w-full">
    <div>
      <div className="py-3 bg-black bg-opacity-40 md:block">
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
              <li><a target="_blank" href="#" className="text-white"><FaFacebook /></a></li>
              <li><a target="_blank" href="#" className="text-white"><FaInstagram /></a></li>
              <li><a target="_blank" href="#" className="text-white"><FaYoutube /></a></li>
            </ul>
          </div>
        </Container>
      </div>

      <div className="py-4 border-b border-gray-600">
        <Container>
          <div className="flex justify-between items-center">
            <Link href="#"><a className="font-medium text-white text-xl">Logo</a></Link>
            <HiOutlineMenu className="text-white text-2xl md:hidden" />
            <ul className="list hidden gap-6 text-white font-medium md:flex md:items-center">
              <li><Link href="#"><a>Pacotes</a></Link></li>
              <li><Link href="#"><a>Quem Somos</a></Link></li>
              <li><Link href="#"><a>Ingressos</a></Link></li>
              <li><Link href="#"><a>Blog</a></Link></li>
              <li><Link href="#"><a>Fale Conosco</a></Link></li>
              <Link href="#"><a className="bg-red-600 p-2 rounded">Área do Cliente</a></Link>
            </ul>
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
  <div className="mt-8 w-full p-6 shadow-lg opacity-90 rounded md:static" style={{ backgroundColor: '#29285D' }}>
    <h2 className="text-center font-medium text-xl uppercase text-white">Faça seu orçamento</h2>
    <form className="mt-8">
      <div className="grid gap-4">
        <div>
          <label className="text-white">Nome:</label>
          <input type="text" name="Test" className="border rounded outline-none w-full px-2 py-1" />
        </div>
        <div>
          <label className="text-white">E-mail:</label>
          <input type="text" name="Test" className="border rounded outline-none w-full px-2 py-1" />
        </div>
        <div>
          <label className="text-white">Telefone:</label>
          <input type="text" name="Test" className="border rounded outline-none w-full px-2 py-1" />
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
          <input type="text" name="Test" className="border rounded outline-none w-full px-2 py-1" />
        </div>
        <div className="row-start-4 col-span-3">
          <label className="text-white">Detalhes do seu orçamento: </label>
          <textarea className="rounded w-full p-2 outline-none" placeholder="Ex.: Origem, destino, data de ida, data de volta, quantidade de pessoas, entre outros detalhes que achar importantes."></textarea>
        </div>
      </div>
      <button className="mt-4 bg-white px-4 py-2 w-full bg-red-600 text-white font-medium rounded">
        Fazer Orçamento
      </button>
    </form>
  </div>
)

const HeroSection = () => (
  <section className="hero-section relative pb-4 flex min-h-screen md:items-center">
    <Header />

    <Container>
      <div className="relative flex flex-col mt-40 md:flex-row md:items-center md:mt-24">
        <div className="col mt-20 md:mt-0 md:w-3/4">
          <h1 className="flex flex-col text-white font-bold">
            <span className="uppercase tracking-widest ml-1">
              <span className="text-red-600 mb-1 inline-block">Afetur</span> Viagens e Turismo
            </span>
            <span className="text-5xl md:text-7xl">Realize a sua viagem dos sonhos...</span>
          </h1>
          <div className="flex flex-col gap-2 mt-4 md:flex-row md:items-center">
            <button className="px-5 py-2 font-medium bg-red-600 text-white rounded w-full rounded-full md:w-auto md:rounded">
              Ver Pacotes
            </button>
            <button className="bg-white px-5 py-2 font-medium text-gray-700 rounded w-full rounded-full md:w-auto md:rounded">
              Quem Somos ?
            </button>
          </div>
        </div>
        <div className="col">
          <BudgeCard />
        </div>
      </div>
    </Container>

    <style jsx>{`
      .hero-section {
        background-image: linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('/images/bg.jpg');
        background-position: center;
        background-repeat: no-repeat;
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
  <div className="text-center bg-white opacity-80 rounded p-8">
    <i></i>
    <p className="text-gray-500">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
    <div></div>
  </div>
)

const TestimonialSection = () => (
  <section className="testimonial-section py-28">

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
  <section className="py-8">
    <Container>
      <div className="grid gap-2 md:grid-rows-4 md:grid-cols-4">
        <div className="rounded md:row-span-4 md:col-span-2">1</div>
        <div className="rounded">2</div>
        <div className="rounded">3</div>
        <div className="rounded">4</div>
        <div className="rounded">5</div>
      </div>
    </Container>
  </section>
)

const Package = () => (
  <div>
    <Image src={Tour2} />
    <div className="flex flex-col items-center mt-2">
      <h3 className="text-center font-bold text-xl mt-3" style={{ color: '#07218B' }}>
        Paris Gourmet
      </h3>
      <div className="text-center mt-4 text-gray-500 font-medium">
        <span className="block">A partir de:</span>
        <span className="block font-bold text-2xl" style={{ color: '#07218B' }}>2.029€</span>
        <span className="block">9 diárias</span>
      </div>
      <button className="mt-3 rounded-full px-4 py-1 text-white" style={{ backgroundColor: '#181E84' }}>Ver Pacote</button>
    </div>
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Afetur - Agência de Viagens</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />

      <div className="py-12 md:pt-12">
        <Container>
          <h2 className="text-center text-3xl font-medium text-gray-700">Pacotes em Destaque</h2>
          <div className="grid gap-5 mt-12 md:grid-cols-3">
            <Package />
            <Package />
            <Package />
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
                <Image src={Disney} />
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
          <h2 className="text-center text-3xl font-medium text-gray-700">Pacotes Internacionais</h2>
          <div className="grid mt-8 gap-5 md:grid-cols-3">
            <Package />
            <Package />
            <Package />
          </div>
        </Container>
      </div>

      <TestimonialSection />

      <BlogSection />

      <Footer />
    </>
  )
}