import AdminLayout from "../../../components/admin/layout";
import InputField from '../../../components/inputField'

export default function NewPacote() {
  return (
    <AdminLayout>
      <div>
        <h2 className="text-2xl font-medium mb-6">Novo Pacote</h2>
        <form className="w-full md:w-96">
          <InputField label="Name" />
          <InputField label="Slug" />
          <InputField label="Price" type="number" min="1" />
          <InputField label="Days" type="number" min="1" />
          <input type="file"className="my-2" />
          <textarea className="w-full border rounded resize-none focus:outline-none mb-3" rows="4"></textarea>
          <button className="bg-blue-300">Salvar</button>
        </form>
      </div>
    </AdminLayout>
  )
}