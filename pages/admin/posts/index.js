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
          <h2 className="text-2xl font-medium">Posts</h2>
          <Link href="/admin/posts/new"><a className="self-end">add new</a></Link>
        </div>
        <div className="mt-6 border p-2">
          <table className="w-full">
            <thead className="w-full">
              <tr>
                <th className="text-gray-700 text-left">Title</th>
                <th className="text-gray-700 text-left">Email</th>
                <th className="text-gray-700 text-left">Author</th>
                <th className="text-gray-700 text-center">Posts</th>
              </tr>
            </thead>
            <tbody>
              {[].map((user) => (
                <tr>
                  <td className="text-left">{user.username}</td>
                  <td className="text-left">{user.email}</td>
                  <td className="text-left">{user.role}</td>
                  <td className="text-center">{user.postCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}