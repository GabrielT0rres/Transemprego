import Input from "../../components/Input";
import ButtonFlat from "../../components/ButtonFlat"
import style from "./style.module.css"
import Navbar from '../../components/Navbar'
import { INPUT_FIELDS_EMPRESA } from '../../constants/contants'

const Empresa = () => {
    return (
        <div className={`d-flex flex-column `}>
            <Navbar />
            <div className={` ${style.card} d-flex flex-column  justify-content-center gap-3`} >


                {INPUT_FIELDS_EMPRESA.map((inputField, index, array) => {
                    var inputFieldNext = array[index + 1];
                    if (index % 2 === 0) {
                        return (
                            <div className={`d-flex gap-3 flex-wrap`}>
                                <div className={`flex-grow-1 `}>
                                    <Input
                                        label={inputField.label}
                                        type="text"
                                        nome={inputField.nome}
                                        id={inputField.id}
                                        placeholder={inputField.placeholder}
                                    />
                                </div>
                                <div className={`flex-grow-1`}>
                                    <Input
                                        label={inputFieldNext.label}
                                        type="text"
                                        nome={inputFieldNext.nome}
                                        id={inputFieldNext.id}
                                        placeholder={inputFieldNext.placeholder}
                                    />
                                </div>
                            </div>
                        )
                    }
                })}
                <ButtonFlat nome="Cadastrar Empresa" />
            </div>



            {/* </div> */}

        </div >
    );
};
export default Empresa;

