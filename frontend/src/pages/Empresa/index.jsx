import Input from "../../components/Input";
import ButtonFlat from "../../components/ButtonFlat";
import style from "./style.module.css";
import Navbar from "../../components/Navbar";
import { INPUT_FIELDS_EMPRESA } from "../../constants/contants";
import axios from "axios";
import { useState } from "react";
import api from "../../constants/api";
import useAuth from "../../Hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const Empresa = () => {
  const [dados, setDados] = useState({});
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const auth = useAuth();
  var query;

  if (auth.signed) {
    query = useQuery({
      queryKey: "CADASTRO-KEY",
      retry: 2,
      onSuccess: (data) => {
        //const { ['vagas']: remove, ...rest } = data.data;
        const rest = data.data;
        setDados(rest);
        localStorage.setItem("user_data", JSON.stringify(rest));
      },
      queryFn: async () => {
        return await axios.get(`${api.URL_API}/empresa/perfil`, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user_token")).access_token
            }`,
          },
        });
      },
    });
  }

  async function mutationPut(data) {
    return await axios({
      url: `${api.URL_API}/empresa`,
      method: "PUT",
      data: data,
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user_token")).access_token
        }`,
      },
    });
  }

  async function mutationPost(data) {
    data = { ...data, ...auth.user };

    return await axios({
      url: `${api.URL_API}/empresa`,
      method: "POST",
      data: data,
    });
  }
  const mutation = useMutation({
    mutationKey: "CADASTRO-MUTATION-KEY",
    onSuccess: async () => {
      queryClient.invalidateQueries("CADASTRO-KEY");
      if (!auth.signed) {
        navigate("/login");
      }
    },
    mutationFn: auth.signed
      ? (dados) => mutationPut(dados)
      : (dados) => mutationPost(dados),
  });

  if (auth.signed && query.isLoading) {
    return (
      <div>
        <h2>{auth.signed}</h2>
      </div>
    );
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log("dasdsa");
    mutation.mutate(dados);
  }
  console.log(dados);
  return (
    <div className={`d-flex flex-column `}>
      <Navbar />
      <div
        className={` ${style.card} d-flex flex-column  justify-content-center gap-3`}
      >
        <form onSubmit={(e) => onSubmit(e)}>
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
                      value={dados[inputField.name]}
                      onChange={(e) => {
                        setDados({
                          ...dados,
                          [inputField.name]: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className={`flex-grow-1`}>
                    <Input
                      label={inputFieldNext.label}
                      type="text"
                      nome={inputFieldNext.nome}
                      id={inputFieldNext.id}
                      placeholder={inputFieldNext.placeholder}
                      value={dados[inputFieldNext.name]}
                      onChange={(e) => {
                        setDados({
                          ...dados,
                          [inputFieldNext.name]: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              );
            }
          })}
          <Input
            label="Senha"
            type="password"
            nome="Senha"
            id="Senha"
            placeholder="Senha"
            value={dados.senha}
            onChange={(e) => {
              setDados({
                ...dados,
                senha: e.target.value,
              });
            }}
          />
            <div className={style.buttonCadastrar}>
          <ButtonFlat nome="Cadastrar Empresa" />
            </div>
        </form>
      </div>
    </div>
  );
};

export default Empresa;
