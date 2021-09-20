import { useEffect } from "react";
import { useSession } from 'next-auth/client'
import AdminLayout from "../../components/admin/layout";
import { useRouter } from "next/dist/client/router";

export default function AdminDashBoard() {
  const router = useRouter()
  const [session, loading] = useSession()
  

  useEffect(() => {
    if (loading) return
    if (!session) router.push('/admin/login')
  }, [loading])

  return (
    <AdminLayout>
      <div>
        Main admin
      </div>
    </AdminLayout>
  )
}