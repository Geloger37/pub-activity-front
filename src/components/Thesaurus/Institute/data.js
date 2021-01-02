import Axios from 'axios'

export var institute /*= [{"idInstitute":1,"nameInstitute":"hfdsjkhfksd"},{"idInstitute":2,"nameInstitute":"fdshjkhkjsdfbnv xnc"}]*/= function() {
    Axios.get('http://localhost:3002/institute')
        .then(res => {
            return JSON.stringify(res.data);
        })
}