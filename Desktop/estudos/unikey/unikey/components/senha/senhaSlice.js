import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  senhas: [],
};

const senhaSlice = createSlice({
  name: 'senha',
  initialState,
  reducers: {
    adicionarSenha: (state, action) => {
      state.senhas.push(action.payload);
    },
    editarSenha: (state, action) => {
      const { id, descricao, senha } = action.payload;
      const senhaEditada = state.senhas.find((senha) => senha.id === id);
      if (senhaEditada) {
        senhaEditada.descricao = descricao;
        senhaEditada.senha = senha;
      }
    },
    excluirSenha: (state, action) => {
      const id = action.payload;
      state.senhas = state.senhas.filter((senha) => senha.id !== id);
    },
  },
});

export const { adicionarSenha, editarSenha, excluirSenha } = senhaSlice.actions;
export default senhaSlice.reducer;
