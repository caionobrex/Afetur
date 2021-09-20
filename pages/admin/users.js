import AdminLayout from "../../components/admin/layout";

export default function AdminUsers({ users }) {
  return (
    <AdminLayout>
      <div>
        <div className="flex items-center gap-x-3">
          <h2 className="text-2xl font-medium">Users</h2>
          <button>add new</button>
        </div>
        <table className="w-full mt-2">
          <thead>
            <tr className="">
              <th className="text-gray-700">User</th>
              <th className="text-gray-700">Email</th>
              <th className="text-gray-700">Função</th>
              <th className="text-gray-700">Posts</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td>name</td>
              <td>name</td>
              <td>name</td>
              <td>name</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/users')
  const users = await res.json()

  return { props: { users } }
}