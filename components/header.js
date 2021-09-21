import Link from 'next/link'
import TopBar from './topBar'

export default function Header() {
  return (
    <header>
      <div className="header flex flex-col justify-between">
        <div style={{ backgroundColor: '#171736' }}>
          <TopBar />
        </div>
        <div className="flex flex-col items-center gap-y-6">
          <Link href="/">
            <a>
              <img src="https://www.afetur.com.br/wp-content/uploads/2021/09/logo2.png" alt="Logo Afetur Fortaleza" height="80px" style={{ zIndex: 999 }} />
            </a>
          </Link>
          <nav className="md:block">
            <ul className="flex gap-x-6 gap-y-1 flex-wrap text-medium justify-center text-white font-medium md:gap-14 md:text-lg">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/pacotes">Pacotes</Link></li>
              <li><Link href="/quem-somos">Quem Somos</Link></li>
              <li><Link href="">Ingressos</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/fale-conosco">Fale Conosco</Link></li>
            </ul>
          </nav>
        </div>
        <div></div>
      </div>

      <style jsx>{`
        .header {
          min-height: 50vh;
          background-color: #29285D;
        }
      `}</style>
    </header>
  )
}