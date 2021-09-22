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
          <h2 className="text-2xl font-medium">New User</h2>
        </div>
        <div className="mt-4">
          <form className="w-full md:w-96">
            <InputField  label="Username" />
            <InputField  label="Email" />
            <InputField  label="Password" />
            <select className="w-full border" name="category">
              <option>Role</option>
              <option>Admin</option>
            </select>
            <button className="mt-5">Salvar</button>
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}