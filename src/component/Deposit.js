import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Deposit = () => {

    const [username, setUsername] = useState(' ');
    const [accountNumber, setAccountNumber] = useState(' ')
    const [depositAmount , setDepositAmount] = useState(0)

    const navigate = useNavigate(' ')

    useEffect(() => {
        setUsername(sessionStorage['username'])
    }, [])

    const onDepositAmount = () => {

        const depositAmounts = { accountNumber,depositAmount }
        
        if(accountNumber.length === 1) {
            toast.warning('Enter Account Number')
        }else if(depositAmount.length === 1) {
            toast.warning('Enter Deposit Amount')
        }else {
            const token = sessionStorage.getItem('access_token');
            console.log(token)
            axios.post('http://localhost:8080/emp/account/deposit?accountNumber='+accountNumber+'&depositAmount='+depositAmount, depositAmounts, 
            { headers: { "Authorization": `Bearer  ${token}`, "content-type": 'application/json' } })
                .then((response) => {
                    console.log(response.data)
                    toast.success('Amount Deposit Successfully')
                })

                navigate('/home')
        }

    }

    return (
        <div className="mt-5">

            <div className="alert alert-success" role="alert">
                <p behavior="" direction="">Account Holder : <i>{username}</i></p>
                <h5 style={{ color: 'black' }}>Deposit Amount</h5>
            </div>

            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">accountNumber</label>
                    <input type="number" className="form-control" id="faccountNumber" placeholder="Enter account Number" onChange={(e) => setAccountNumber(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">depositAmount</label>
                    <input type="number" className="form-control" id="depositAmount" placeholder="Enter account Number" onChange={(e) => setDepositAmount(e.target.value)} />
                </div>

                <div >
                    <button style={{  animationduration: '5s'}} type="button" className="btn btn-success" onClick={onDepositAmount}>Deposit</button>
                    &nbsp;
                    <button type="button" className="btn btn-warning">Reset</button>

                </div>
            </form>


        </div>
    )
}

export default Deposit;