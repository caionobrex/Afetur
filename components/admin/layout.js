import Link from 'next/link'
import { BiUser, BiPackage, BiHome } from 'react-icons/bi'
import { AiFillPushpin } from 'react-icons/ai'
import { GoFileMedia } from 'react-icons/go'
import { signOut } from 'next-auth/client'

const FixedSideBar = () => (
  <div className="sidebar hidden fixed md:flex mt-10">
    <nav>
      <ul className="flex flex-col gap-y-3 text-white px-4 py-3 font-medium">
        <li>
          <Link href="/admin/posts">
            <a className="flex items-center gap-x-2"><AiFillPushpin /> Posts</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/pacotes">
            <a className="flex items-center gap-x-2"><BiPackage />Pacotes</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/medias">
            <a className="flex items-center gap-x-2"><GoFileMedia /> Medias</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/users">
            <a className="flex items-center gap-x-2"><BiUser /> Users</a>
          </Link>
        </li>
      </ul>
    </nav>

    <style jsx>{`
      .sidebar {
        width: 12%;
        height: 100%;
        background-color: #29285D;
      }
    `}</style>
  </div>
)

export default function AdminLayout({ children }) {
  return (
    <div>
      <header className="header flex justify-between items-center text-white px-4 py-2 fixed w-full">
        <Link href="/admin/"><a><BiHome className="text-xl" /></a></Link>
        <div>
          username
          <img />
        </div>
      </header>

      <FixedSideBar />

      <main className="main px-4 py-14 bg-gray-50 min-h-screen md:px-6">
        {children}
      </main>

      <style jsx>{`
        .header {
          background-color: #1f1f47;
        }

        @media only screen and (min-width: 768px) {
          .main {
            margin-left: 12%;
          }
        }
      `}</style>
    </div>
  )
}