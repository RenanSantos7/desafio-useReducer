A resposta do Copilot:

```jsx
import React, { useReducer } from "react";

// O estado inicial do aplicativo
const initialState = {
  saldo: 1000, // O saldo total do usuário
  extrato: [], // O histórico de movimentações do usuário
  transacoes: [], // As transações pendentes do usuário
};

// A função redutora que atualiza o estado de acordo com a ação
function reducer(state, action) {
  switch (action.type) {
    case "DEPOSITAR": // A ação de depositar dinheiro na conta
      return {
        ...state,
        saldo: state.saldo + action.valor, // Atualiza o saldo somando o valor
        extrato: [...state.extrato, `+${action.valor}`], // Adiciona o valor ao extrato
      };
    case "SACAR": // A ação de sacar dinheiro da conta
      return {
        ...state,
        saldo: state.saldo - action.valor, // Atualiza o saldo subtraindo o valor
        extrato: [...state.extrato, `-${action.valor}`], // Adiciona o valor negativo ao extrato
      };
    case "TRANSFERIR": // A ação de transferir dinheiro para outra conta
      return {
        ...state,
        saldo: state.saldo - action.valor, // Atualiza o saldo subtraindo o valor
        extrato: [...state.extrato, `-${action.valor}`], // Adiciona o valor negativo ao extrato
        transacoes: [...state.transacoes, action], // Adiciona a transação à lista de transações pendentes
      };
    case "CONFIRMAR": // A ação de confirmar uma transação pendente
      return {
        ...state,
        transacoes: state.transacoes.filter(
          (t) => t.id !== action.id
        ), // Remove a transação da lista de transações pendentes
      };
    case "CANCELAR": // A ação de cancelar uma transação pendente
      return {
        ...state,
        saldo: state.saldo + action.valor, // Atualiza o saldo somando o valor
        extrato: [...state.extrato, `+${action.valor}`], // Adiciona o valor ao extrato
        transacoes: state.transacoes.filter(
          (t) => t.id !== action.id
        ), // Remove a transação da lista de transações pendentes
      };
    default:
      return state; // Retorna o estado atual se a ação não for reconhecida
  }
}

// O componente principal do aplicativo
function App() {
  const [state, dispatch] = useReducer(reducer, initialState); // Usa o usereducer para gerenciar o estado global

  // As funções que despacham as ações para o redutor
  const depositar = (valor) => {
    dispatch({ type: "DEPOSITAR", valor });
  };

  const sacar = (valor) => {
    dispatch({ type: "SACAR", valor });
  };

  const transferir = (valor, destino) => {
    dispatch({ type: "TRANSFERIR", valor, destino, id: Math.random() });
  };

  const confirmar = (id) => {
    dispatch({ type: "CONFIRMAR", id });
  };

  const cancelar = (id, valor) => {
    dispatch({ type: "CANCELAR", id, valor });
  };

  // O JSX que renderiza o aplicativo
  return (
    <div className="App">
      <h1>Aplicativo Bancário</h1>
      <p>Seu saldo é: R$ {state.saldo}</p>
      <p>Seu extrato é:</p>
      <ul>
        {state.extrato.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Suas transações pendentes são:</p>
      <ul>
        {state.transacoes.map((item) => (
          <li key={item.id}>
            {item.valor} para {item.destino}{" "}
            <button onClick={() => confirmar(item.id)}>Confirmar</button>{" "}
            <button onClick={() => cancelar(item.id, item.valor)}>
              Cancelar
            </button>
          </li>
        ))}
      </ul>
      <p>Faça uma operação:</p>
      <button onClick={() => depositar(100)}>Depositar R$ 100</button>
      <button onClick={() => sacar(100)}>Sacar R$ 100</button>
      <button onClick={() => transferir(100, "João")}>
        Transferir R$ 100 para João
      </button>
    </div>
  );
}

export default App;

```