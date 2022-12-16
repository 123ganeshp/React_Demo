import axios from "axios";

const ACCOUNT_URL="http://localhost:8080/emp/account";
class Service{
    sendMoney(transferBalanceRequest){
        return axios.post(ACCOUNT_URL + '/send',transferBalanceRequest)
    }
  
}
export default new Service();