import Container from './container'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function TopBar() {
  return (
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
  )
}