let apiUrl = ''
if(process.env.NODE_ENV === 'development') {
    apiUrl = 'http://94.45.140.34:8100'
} else {
    apiUrl = 'http://94.45.140.34:8100'
}

const Urls = {

  vms : '/api/v1/Vms',

}


export { apiUrl, Urls}
