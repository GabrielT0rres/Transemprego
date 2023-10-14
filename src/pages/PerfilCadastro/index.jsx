import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import CardDragDrop from '../../components/CardDragDrop';

const PerfilCadastro = () => {


    return (
        <div>
            <Navbar />
            <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className='col-8'>
                        <div className={`row`}>
                            <Input label='Nome Completo'
                                id='input-nome-completo'
                                type='text' />
                        </div>
                        <div className={`row`}>
                            <Input label='Nome Social'
                                id='input-nome-social'
                                type='text' />
                        </div>
                        <div className={`row`}>
                            <Input label='Endereço'
                                id='Input-nome' type='text' />
                        </div>
                    </div>
                    <div className='col-4'>
                        <CardDragDrop />
                    </div>
                </div>
            </div>
            
        </div>
    )
}



export default PerfilCadastro;