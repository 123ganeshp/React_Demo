import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Transaction = () => {

    const [username, setUsername] = useState(' ')
    const navigate = useNavigate(' ')

    useEffect(() => {
      setUsername(sessionStorage['username'])
    }, [])
    return (
        <div>

            <div className="alert alert-warning" role="alert">
                <p behavior="" direction="">Account Holder : <i>{username}</i></p>
                <h5 style={{color:'black'}}>Transaction History</h5>
            </div>
            

        </div>
    )

}

export default Transaction;