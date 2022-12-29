import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Service from "../service/Service";

const Transfer = () => {

    const [fromAccountNumber, setFromAccountNumber] = useState(' ');
    const [toAccountNumber, setToAccountNumber] = useState(' ');
    const [amount, setAmount] = useState(' ');

    const navigate = useNavigate(' ')

    // useEffect(() => {
    //     setFromAccountNumber(sessionStorage['fromAccountNumber'])
    //     setToAccountNumber(sessionStorage['toAccountNumber'])
    //     setAmount(sessionStorage['amount'])
    // }, [])

    const onTransfer = () => {
        const transferBalanceRequest = { fromAccountNumber, toAccountNumber, amount }

        if (fromAccountNumber.length === 1) {
            toast.warning('Please Enter fromAccount Number')
        } else if (toAccountNumber.length === 1) {
            toast.warning('Please Enter toAccount Number')
        } else if (amount.length === 1) {
            toast.warning('Please Enter Transfer Amount')
        } else {

            const token = sessionStorage.getItem('access_token');
            console.log(token)
            axios.post("http://localhost:8080/emp/account/send", transferBalanceRequest, { headers: { "Authorization": `Bearer  ${token}`, "content-type": 'application/json' } })
                .then((response) => {
                    console.log(response.data)
                    toast.success('Transfer Amount Successfully')
                })

                navigate('/home')
        }

    }


    return (
        <div className="container pt-4">
            <h1>Fund Transfer</h1>
            <hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">FromAccount</label>
                    <input type="number" className="form-control" id="fromAccountNumber" placeholder="Enter account Number" onChange={(e) => setFromAccountNumber(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">ToAccount</label>
                    <input type="number" className="form-control" id="toAccountNumber" placeholder="Enter account Number"
                        onChange={(e) => setToAccountNumber(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Transfer Amount</label>
                    <input type="number" className="form-control" id="toAmount" placeholder="Enter the Amount"
                        onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Remark(Optinal)</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
                <br></br>
                <div >
                    <button type="button" className="btn btn-success" onClick={onTransfer}>Pay</button>
                    &nbsp;
                    <button type="button" className="btn btn-warning">Cancle</button>

                </div>
            </form>
        </div>
    )


}

export default Transfer;