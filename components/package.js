import Zoom from 'react-reveal/Zoom'
import Link from 'next/link'
import { BsEye } from 'react-icons/bs'

export default function Package({ src }) {
  return (
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
}