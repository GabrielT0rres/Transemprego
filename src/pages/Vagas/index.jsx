import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import CardDragDrop from '../../components/CardDragDrop';
import TextArea from '../../components/TextArea';
import ButtonFlat from '../../components/ButtonFlat';
import style from './style.module.css'

const Vagas = () => {
    return (

        <div className={`d-flex flex-column `}>
            <Navbar />
            <div className={` ${style.card} d-flex flex-column  justify-content-center gap-3`} >
                <div className={`d-flex flex-wrap gap-3`}>
                    <div className={`d-flex flex-column flex-grow-1 gap-3`}>
                        <Input label='Cargo/Ocupação:'
                            id='input-cargo-ocupaçao'
                            placeholder='Informe o Cargo/Ocupação.'
                            type='text'
                        />
                        <Input label='Salário:'
                            id='input-salário'
                            placeholder='Informe o salário.'
                            type='text' />
                        <Input label='Endereço:'
                            id='Input-endereco'
                            placeholder='Informe o endereço.'
                            type='text' />
                        <Input
                            label='Jornada de trabalho:'
                            id='Input-jornada-trabalho'
                            placeholder='Informe a jornada de trabalho.'
                            type='text' />
                    </div>
                    <div className={`d-flex flex-column flex-grow-1 gap-3`}>
                        <Input label='Tipo do contrato:'
                            id='input-contrato'
                            placeholder='Informe o tipo de contrato.'
                            type='text' />
                        <Input label='Benefícios:'
                            id='input-benefícios'
                            placeholder='Informe os benefícios.'
                            type='text' />
                        <Input label='Local de trabalho:'
                            id='input-local-trabalho'
                            placeholder='Informe o local de trabalho.'
                            type='text' />
                        <Input label='Número de vagas ofertatas:'
                            id='input-n-vagas-ofertadas'
                            placeholder='Informe a quantidade de vagas ofertadas.'
                            type='number' />
                    </div>
                </div>
                <Input
                    label='Pré-requisitos:'
                    id='Input-pre-requisitos'
                    placeholder='Informe os pré-requisitos.'
                    type='text' />
                <TextArea
                    id='input-objetivo'
                    placeholder='Digite aqui a descrição da vaga.'
                    label='Descrição da vaga:' />
                <ButtonFlat nome="Cadastrar vaga" />
            </div>
        </div>

    )
}

export default Vagas; 