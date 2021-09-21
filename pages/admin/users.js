import Link from 'next/link'
import AdminLayout from "../../components/admin/layout";

export default function AdminUsers({ users }) {
  return (
    <AdminLayout>
      <div>
        <div className="flex items-center gap-x-3">
          <h2 className="text-2xl font-medium">Users</h2>
          <Link href="/"><a className="self-end">add new</a></Link>
        </div>
        <div className="mt-6 border p-2">
          <table className="w-full">
            <thead className="w-full">
              <tr>
                <th className="text-gray-700 text-left">User</th>
                <th className="text-gray-700 text-left">Email</th>
                <th className="text-gray-700 text-left">Função</th>
                <th className="text-gray-700 text-center">Posts</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <>
                  <tr>
                    <td className="text-left">{user.username}</td>
                    <td className="text-left">{user.email}</td>
                    <td className="text-left">{user.role}</td>
                    <td className="text-center">{user.postCount}</td>
                  </tr>
                  <tr>
                    <td className="text-left">{user.username}</td>
                    <td className="text-left">{user.email}</td>
                    <td className="text-left">{user.role}</td>
                    <td className="text-center">{user.postCount}</td>
                  </tr>
                  <tr>
                    <td className="text-left">{user.username}</td>
                    <td className="text-left">{user.email}</td>
                    <td className="text-left">{user.role}</td>
                    <td className="text-center">{user.postCount}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/users')
  const users = await res.json()

  return { props: { users } }
}