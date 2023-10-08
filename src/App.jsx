import Input  from './components/Input'
import FilterInput from './components/FilterInput'
import FilterSelect from './components/FilterSelect'
import ButtonRound from './components/ButtonRound'
import ButtonFlat from './components/ButtonFlat'

function App() {

  return (
    <>      
      <Input
        id='nome'
        name='E-mail'
        placeholder='Digite seu nome...'
        label="Nome completo:" />
      
      <FilterInput 
        placeholder="Área de atuação..."
      />
      <FilterInput
        placeholder="Empresa..."
      />

      <FilterSelect
        defaultOption="Estado" 
        options={['Bahia', 'São Paulo', 'Rio de Janeiro']} 
      />
      <FilterSelect
        defaultOption="Ensino" 
        options={['Opção 4', 'Opção 5', 'Opção 6']} 
      />
      <FilterSelect
        defaultOption="Tipo" 
        options={['Opção 1', 'Opção 2', 'Opção 3']} 
      />
      
      <ButtonRound
        id='btn'
        nome='Candidatar'
        value='Candidatar'
      />

      <ButtonFlat nome="Cadastrar vaga"
      
      />
      
    </>
  )
}

export default App
