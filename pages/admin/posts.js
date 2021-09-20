import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import AdminLayout from '../../components/admin/layout'

export default function AdminPosts() {
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
    if (loading) return
    if (!session) router.push('/')
  }, [loading])
  
  return (
    <AdminLayout>
      <div>
        Posts
      </div>
    </AdminLayout>
  )
}