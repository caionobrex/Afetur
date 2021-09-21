import router from 'next/router'
import { Formik } from "formik"
import { signIn, useSession } from "next-auth/client"

export default function AdminLogin() {
  const [session, loading] = useSession()

  if (session) return router.push('/admin')

  return (
    <div className="h-screen flex flex-col justify-center items-center px-5 gap-y-12" style={{ backgroundColor: '#29285d' }}>
      <div>
        <img src="https://www.afetur.com.br/wp-content/uploads/2021/09/logo2.png" alt="Logo Afetur Fortaleza" style={{ zIndex: 999 }} />
      </div>

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
            <button type="submit" className="bg-blue-900 block w-full mt-6 text-white">
              Login
            </button>
          </form>
        )}        
      </Formik>
    </div>
  )
}