import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Withdraw = () => {
    const [username, setUsername] = useState(' ');
    const [accountNumber, setAccountNumber] = useState(' ')
    const [withdrawAmount, setWithdrawAmount] = useState(' ')

    const navigate = useNavigate(' ')

    useEffect(() => {
        setUsername(sessionStorage['username'])
    }, [])

    const onWithdrawAmount = () => {

        const withdrawAmounts = { accountNumber, withdrawAmount }


        if (accountNumber.length === 1) {
            toast.warning('Enter Account Number')
        } else if (withdrawAmount.length === 1) {
            toast.warning('Enter Withdraw Amount')
        } else {
            const token = sessionStorage.getItem('access_token');
            console.log(token)
            axios.post('http://localhost:8080/emp/account/withdraw?accountNumber='+accountNumber+'&withdrawAmount='+withdrawAmount, withdrawAmounts, 
            { headers: { "Authorization": `Bearer  ${token}`, "content-type": 'application/json' } })
                .then((response) => {
                    console.log(response.data)
                    toast.success('Amount Withdraw Successfully')
                })

                navigate('/home')

        }

    }

    return (
        <div>

            <div className="alert alert-success" role="alert">
                <p behavior="" direction="">Account Holder : <i>{username}</i></p>
                <h5 style={{ color: 'black' }}>Withdraw Amount</h5>
            </div>

            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">accountNumber</label>
                    <input type="number" className="form-control" id="faccountNumber" placeholder="Enter account Number" onChange={(e) => setAccountNumber(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">withdrawAmount</label>
                    <input type="number" className="form-control" id="Amount" placeholder="Enter account Number" onChange={(e) => setWithdrawAmount(e.target.value)} />
                </div>

                <div >
                    <button type="button" className="btn btn-success" onClick={onWithdrawAmount}>Withdraw</button>
                    &nbsp;
                    <button type="button" className="btn btn-warning">Reset</button>

                </div>
            </form>


        </div>
    )
}

export default Withdraw;