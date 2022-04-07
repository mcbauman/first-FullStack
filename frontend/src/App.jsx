import CreateUser from "./createUser.jsx"
import WriteMessage from "./writeMessage.jsx"
import ShowUsers from "./showUsers.jsx"
import ShowMessages from "./showMessages.jsx"

export default function App(){
    return(
        <div>
            <CreateUser/>
            <WriteMessage/>
            <ShowUsers/>
            <ShowMessages/>
        </div>
    )
}