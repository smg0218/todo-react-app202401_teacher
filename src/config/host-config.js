
const LOCAL_PORT = '8083';
const API_BASE_URL = 'http://localhost:' + LOCAL_PORT;

const TODO = '/api/todos';
const AUTH = '/api/auth';

export const TODO_URL = API_BASE_URL + TODO;
export const AUTH_URL = API_BASE_URL + AUTH;