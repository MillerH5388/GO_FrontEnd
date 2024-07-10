const socket = io(WEBSOCKET, {closeOnBeforeunload: false});

socket.on('connect', () => {
    console.log('Conectado ao servidor WebSocket');
});

socket.on('connect_error', (error) => {
    console.error('Erro de conexão:', error);
});

socket.on('disconnect', (reason) => {
    console.warn('Desconectado do servidor WebSocket:', reason);
});