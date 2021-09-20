import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="header flex flex-col justify-center bg-red-400">
        {/* <h1>Logo</h1> */}
        <nav className="justify-self-center self-center justify-self-end hidden md:block">
          <ul className="flex gap-16 text-xl text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pacotes">Pacotes</Link></li>
            <li><Link href="/quem-somos">Quem Somos</Link></li>
            <li><Link href="">Ingressos</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/fale-conosco">Fale Conosco</Link></li>
          </ul>
        </nav>
        {/* <h2 className="self-center">ds</h2> */}
      </div>

      <style jsx>{`
        .header {
          height: 50vh;
        }
      `}</style>
    </header>
  )
}