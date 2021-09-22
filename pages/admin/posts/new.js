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
        <h2 className="text-2xl font-medium text-gray-700">New Post</h2>
        <div className="mt-4">
          <form className="w-full md:w-96">
            <InputField  label="Title" />
            <InputField  label="Slug" />
            <InputField  label="Tags" />
            <div>
              <textarea name="summary" className="border rounded block w-full p-2 resize-none focus:outline-none focus:border-none" rows="3" name="summary" placeholder="Escreva um resumo sobre o post"></textarea>
            </div>
            <input type="file" className="my-2" />
            <select name="category" className="w-full mt-3 border">
              <option>Categoria</option>
              <option>Cat 1</option>
              <option>Cat 2</option>
            </select>
            <div className="flex flex-col gap-y-3 mt-3">
              <input type="radio" name="visibility" />
              <input type="radio" name="visibility" />
            </div>
            <button className="mt-3">Salvar</button>
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}