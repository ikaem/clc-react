import React, { useState, useEffect, createContext } from "react";
// import io from "socket.io-client";

const SocketIOContext = createContext();

const SocketIOProvider = ({ children }) => {
    // const socket = io("localhost:8000");

    // const [ playersCommunication, setPlayersCommunication ] = useState([]);
    // const [ playerMessage, setPlayerMessage ] = useState("");
    // const [ playerMessageToObservers, setPlayerMessageToObservers ] = useState("");
    // const [ observersCommunication, setObserversCommunication ] = useState([]);
    // const [ playersGameRoom, setPlayersGameRoom ] = useState("");
    // const [ observersGameRoom, setObserversGameRoom ] = useState("");


    // useEffect(() => {
    //     console.log("socket id useEffect1", socket.id);
    //     socket.emit("join", { user: "Karlo"}, (data) => {
    //         console.log(data);
    //     });

    //     return () => {
    //         socket.emit("disconnect", {}, (data) => {
    //             console.log(data);
    //         });
    //         socket.off();
    //     }
    // }, []);
    // useEffect(() => {
    //     console.log("socket id useEffect2", socket.id);
    // }, []);



    return (
    <SocketIOContext.Provider
        // value={{
        //     playersCommunication,
        //     observersCommunication,
        //     playerMessage,
        //     playerMessageToObservers,
        //     playersGameRoom,
        //     observersGameRoom,
        //     setPlayersCommunication,
        //     setObserversCommunication,
        //     setPlayerMessage,
        //     setPlayerMessageToObservers,
        //     setPlayersGameRoom,
        //     setObserversGameRoom
        // }}
        >
        {children}
    </SocketIOContext.Provider>
    )
}

export default SocketIOProvider;