import AdminLayout from '../../components/admin/layout'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'

const Gallery = () => {
  return (
    <div className="grid"></div>
  )
}

export default function AdminMedias({ medias }) {
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
    if (loading) return
    if (!session) router.push('/')
  }, [loading])
  
  return (
    <AdminLayout>
      <div>{medias.length}</div>
    </AdminLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/medias')
  const medias = await res.json()
  return { props: { medias } }
}