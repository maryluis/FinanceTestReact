import { io } from "socket.io-client";
import { eventChannel}  from "redux-saga";
const url = "localhost:4000";

function connectSocket() {
    const socket = io(`ws://${url}`);
    socket.emit('start')
    return new Promise((resolve) => {
        resolve(socket);
    });
}


const createCanalSocket = socket => {
    return eventChannel((emit) => {
        const handler = (data) => {
            emit(data);
        };
        socket.on('ticker', handler);
        return () => socket.off('ticker', handler);
    });
}

function objToArr(obj) {
    let newArr = [];
    for(let key in obj) {
      
      newArr.push({id: key, dish: obj[key],});
    } ;
    return newArr;
  }


export {url, connectSocket, createCanalSocket, objToArr};