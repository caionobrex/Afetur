export default function AdminUsers({ users }) {
  return (
    <div>
      {users.length}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/users')
  const users = await res.json()

  return {
    props: { users }
  }
}