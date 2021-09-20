import Swing from 'react-reveal/Swing'
import { Formik } from 'formik'

export default function BudgeCard() {

  const onSubmitHandle = (values) => {
    alert('Não funcionando.')
  }

  const validate = (values) => {}

  return (
    <Swing>
      <div className="budge-card mt-8 w-full p-6 shadow-lg opacity-90 rounded md:mt-16">
        <h2 className="text-center font-medium text-xl uppercase text-white">
          Faça já seu orçamento
        </h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            subject: '',
            state: '',
            city: '',
            neighbor: '',
            details: ''
          }}
          validate={validate}
          onSubmit={onSubmitHandle}
        >
          {({
            handleSubmit
          }) => (
            <form className="mt-8" onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div>
                <label className="text-white">Nome:</label>
                <input type="text" name="Test" placeholder="Digite seu nome" className="border rounded outline-none w-full px-2 py-1" />
              </div>
              <div>
                <label className="text-white">E-mail:</label>
                <input type="text" name="Test" placeholder="Digite seu email" className="border rounded outline-none w-full px-2 py-1" />
              </div>
              <div>
                <label className="text-white">Telefone:</label>
                <input type="text" name="Test" placeholder="Digite seu telefone" className="border rounded outline-none w-full px-2 py-1" />
              </div>
              <div>
                <label className="text-white">Assunto:</label>
                <select type="select" name="Test" className="border rounded outline-none w-full px-2 py-1">
                  <option disabled="disabled" selected="selected">Selecione&#8230;</option>
                  <option value="pacote">Pacote</option>
                  <option value="passagem-aerea">Passagem Aérea</option>
                  <option value="hotel">Hotel</option>
                  <option value="cruzeiro">Cruzeiro</option>
                  <option value="transfer">Transfer</option>
                  <option value="aluguel-de-carro">Aluguel de Carro</option>
                  <option value="seguro">Seguro</option>
                  <option value="city-tour">City Tour</option>
                  <option value="ingresso">Ticket/Ingresso</option>
                  <option value="viagem-de-incentivo">Viagem de Incentivo</option>
                  <option>Viagens Parceiras</option>
                  <option value="lua-de-mel">Lua de Mel</option>
                  <option value="cambio">Câmbio</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="documentacao">Documentação</option>
                </select>
              </div>
              <div>
                <label className="text-white">Estado:</label>  
                <select type="select" name="Test" className="border rounded outline-none w-full px-2 py-1">
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option>
                </select>
              </div>
              <div>
                <label className="text-white">Cidade:</label>
                <input type="text" name="Test" className="border rounded outline-none w-full px-2 py-1" placeholder="Digite sua cidade" />
              </div>
              <div className="row-start-3 col-span-3">
                <label className="text-white">Bairro:</label>
                <input type="text" name="Test" placeholder="Digite seu bairro" className="border rounded outline-none w-full px-2 py-1" />
              </div>
              <div className="row-start-4 col-span-3">
                <label className="text-white">Detalhes do seu orçamento: </label>
                <textarea className="rounded w-full px-2 py-3 outline-none" placeholder="Ex.: Origem, destino, data de ida, data de volta, quantidade de pessoas, entre outros detalhes que achar importantes."></textarea>
              </div>
            </div>
            <button className="mt-4 bg-white px-4 py-2 w-full bg-red-600 text-white font-medium transition-all duration-300 rounded hover:bg-red-800">
              Fazer Orçamento
            </button>
          </form>
          )}
        </Formik>
      </div>

      <style jsx>{`
        .budge-card {
          background-color: #29285D;
        }
      `}</style>
    </Swing>
  )
}