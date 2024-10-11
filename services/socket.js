class Socket{
    constructor(url){
        this.socket = new WebSocket(url);
    }

    connect(){
        this.socket.onopen = (e)=>{
            console.log("WebSocket connection established")
        }

        this.socket.onmessage = (e)=>{
            console.log("Received message: " )
        }

        this.socket.onclose = ()=>{
            console.log("WebSocket connection closed")
        }
        
        this.socket.onerror = (err)=>{
            console.log("WebSocket Error: ", err)
        }
    }

    sendMessage(message){
        if(this.socket.readyState === WebSocket.OPEN){
            this.socket.send(message)
        }else{
            console.log("WebSocket is not open")
        }
    }

    close(){
        this.socket.close();
    }
}

export default Socket;