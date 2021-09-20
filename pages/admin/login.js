import router from 'next/router'
import { Formik } from "formik"
import { signIn, useSession } from "next-auth/client"

export default function AdminLogin() {
  const [session, loading] = useSession()

  if (session) return router.push('/admin')

  return (
    <div className="h-screen flex justify-center items-center px-5">
      <Formik
        initialValues={{ user: '', pass: '' }}
        onSubmit={(values) => {
          signIn('credentials', {
            redirect: false,
            username: values.user,
            password: values.pass
          }).then((res) => {
            if (res.status === 401) return alert('Credentials wrong.')
            router.push('/admin')
          })
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur
        }) => (
          <form className="w-full md:w-96" onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <input
                type="text"
                name="user"
                value={values.user}
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                type="password"
                name="pass"
                value={values.pass}
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button type="submit" className="bg-blue-200 block w-full mt-6">
              Login
            </button>
          </form>
        )}        
      </Formik>
    </div>
  )
}