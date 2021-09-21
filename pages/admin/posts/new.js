import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import Link from 'next/link'
import AdminLayout from '../../../components/admin/layout'

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
        <div className="flex items-center gap-x-3">
          <h2 className="text-2xl font-medium">New Post</h2>
        </div>
        <div className="mt-4">
          <form className="flex flex-col" style={{ width: '40%' }}>
            <input type="text" name="title" className="border" />
            <input type="text" name="slug" className="border" />
            <input type="text" name="body" className="border" />
            <textarea name="summary"></textarea>
            <select name="category"></select>
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}