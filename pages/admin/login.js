import router from 'next/router'
import { Formik } from "formik"
import { signIn, useSession } from "next-auth/client"
import InputField from '../../components/inputField'

export default function AdminLogin() {
  const [session, loading] = useSession()

  if (session) return router.push('/admin')

  return (
    <div className="h-screen flex flex-col justify-center items-center px-5 gap-y-4" style={{ backgroundColor: '#29285d' }}>
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
            <InputField
              type="text"
              name="user"
              label="User"
              value={values.user}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <InputField
              type="password"
              name="pass"
              label="Senha"
              value={values.pass}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" className="bg-blue-900 block w-full text-white">
              Login
            </button>
          </form>
        )}        
      </Formik>
    </div>
  )
}