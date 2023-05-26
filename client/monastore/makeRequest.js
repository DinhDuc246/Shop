import axios from "axios";
import variable from '../../client/monastore/src/components/Var_API/env'

const makeRequest = axios.create({
    baseUrl: variable.REACT_APP_UPLOAD_URL,
    headers: {
        Authorization: "bearer" + variable.REACT_APP_API_TOKEN,
    },
});
export default makeRequest;