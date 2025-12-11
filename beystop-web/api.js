import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://beystopestacionamento.azurewebsites.net',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (email, senha) => {
    const response = await api.post('/auth/login', { email, senha });
    return response.data;
}

export const register = async (nome, email, senha) => {
    const response = await api.post('/auth/register', { nome, email, senha });
    return response.data;
}

export const getCars = async () => {
    const response = await api.get('/api/veiculos');
    return response.data;
}

export const addCar = async (placa) => {
    const response = await api.post('/api/veiculos/entrada', { placa: placa });
    return response.data;
}

export const removeCar = async (placa) => {
    const response = await api.put(`/api/veiculos/saida`, { placa: placa });
    return response.data;
}

export default api