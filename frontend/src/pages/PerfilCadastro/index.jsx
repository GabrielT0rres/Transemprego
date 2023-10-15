import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import CardDragDrop from '../../components/CardDragDrop';
import TextArea from '../../components/TextArea';
import ButtonFlat from '../../components/ButtonFlat';
import style from './style.module.css'

const PerfilCadastro = () => {


    return (
        <div className={`d-flex flex-column `}>
            <Navbar />
            <div className={` ${style.card} d-flex flex-column  justify-content-center gap-3`} >
                <div className={`d-flex flex-wrap gap-3`}>
                    <div className={`d-flex flex-column flex-grow-1 gap-3`}>
                        <Input label='Nome Completo'
                            id='input-nome-completo'
                            placeholder='Digite aqui seu nome completo.'
                            type='text'
                        />
                        <Input label='Nome Social'
                            id='input-nome-social'
                            placeholder='Digite aqui seu nome social.'
                            type='text' />
                        <Input label='Endereço'
                            id='Input-endereco'
                            placeholder='Digite aqui seu endereço.'
                            type='text' />
                    </div>
                    <div className={`d-flex flex-column`}>
                        <CardDragDrop />
                    </div>
                </div>
                <Input
                    label='Outra coisa'
                    id='Input-outra-coisa'
                    placeholder='Digite aqui outra coisa.'
                    type='text' />
                <TextArea
                    id='input-objetivo'
                    placeholder='Digite aqui seu objetivo.'
                    label='Objetivo profissional' />
                <ButtonFlat nome="Salvar Informações" />
            </div>
        </div>


    )
}



export default PerfilCadastro;