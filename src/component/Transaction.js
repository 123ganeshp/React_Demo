import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Transaction = () => {

    const [username, setUsername] = useState(' ')
    const [accountNumber, setAccountNumber] = useState(' ')
    const [startDate, setStartDate] = useState(' ')
    const [endDate, setEndDate] = useState(' ')
    const navigate = useNavigate(' ')

    const params = useParams(' ')

    useEffect(() => {
        setUsername(sessionStorage['username'])
    }, [])

    const showTransactionHistory = () => {

        const transactionHistory = { accountNumber, startDate, endDate }

        if (accountNumber.length === 1) {
            toast.warning('Enter Account Number')
        } else if (startDate.length === 1) {
            toast.warning('Enter Start Date')
        } else if (endDate.length === 1) {
            toast.warning('Enter End Date')
        } else {

            const token = sessionStorage.getItem('access_token');
            console.log(token)

            // axios.get('http://localhost:8080/emp/account/statement?accountNumber='+accountNumber+'&startDate='+startDate+'&endDate='+endDate, 
            // transactionHistory, { headers: { "Authorization": `Bearer  ${token}`, "content-type": 'application/json' } })
            //     .then((response) => {
            //         console.log(response.data)
            //     })

            axios.get('http://localhost:8080/emp/account/statement' , {
                params: {
                    accountNumber: +'accountNumber',
                    startDate: +'startDate',
                    endDate: 'endDate'


                }
            },
                transactionHistory, { headers: { "Authorization": `Bearer  ${token}`, "content-type": 'application/json' } })
                .then((response) => {
                    console.log(response.data)
                })
        }

    }
    return (
        <div className="mt-5">

            <div className="alert alert-warning" role="alert">
                <p behavior="" direction="">Account Holder : <i>{username}</i></p>
                <h5 style={{ color: 'black' }}>Transaction History</h5>
            </div>

            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">accountNumber</label>
                    <input type="number" className="form-control" id="fromAccountNumber" placeholder="Enter account Number" onChange={(e) => setAccountNumber(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">startDate</label>
                    <input type="date" className="form-control" id="fromAccountNumber" placeholder="Enter account Number" onChange={(e) => setStartDate(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">endDate</label>
                    <input type="date" className="form-control" id="fromAccountNumber" placeholder="Enter account Number" onChange={(e) => setEndDate(e.target.value)} />
                </div>

                <div >
                    <button type="button" className="btn btn-success" onClick={showTransactionHistory}>Show Transaction History</button>
                    &nbsp;
                    <button type="button" className="btn btn-warning">Reset</button>

                </div>
            </form>


        </div>
    )

}

export default Transaction;