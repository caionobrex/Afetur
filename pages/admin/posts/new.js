import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import Link from 'next/link'
import AdminLayout from '../../../components/admin/layout'
import InputField from '../../../components/inputField'

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
          <form style={{ width: '40%' }}>
            <InputField  label="Title" />
            <InputField  label="Slug" />
            <textarea className="border rounded block w-full resize-none focus:outline-none focus:border-none" rows="4" name="summary"></textarea>
            {/* <select name="category"></select> */}
            <button className="bg-blue-800 mt-3">Salvar</button>
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}