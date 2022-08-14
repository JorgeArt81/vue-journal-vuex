
import axios from 'axios'


const journalApi = axios.create({
  baseURL: 'https://vue-demos-f1d01-default-rtdb.firebaseio.com'
})


export default journalApi