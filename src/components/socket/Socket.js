import { io } from 'socket.io-client'


// const SERVER_URL = 'https://chat-app-api-001.herokuapp.com'
const SERVER_URL = 'http://localhost:5000'

const socket = io(SERVER_URL, { transport: ['websocket'] })

export default socket

