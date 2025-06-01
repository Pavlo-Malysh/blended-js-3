import axios from 'axios'


fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`)
    }
    return res.json();
}).then((data) => { console.log('Отримано дані: ', data); }).catch((err) => { console.log('Sorry error'); })


axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    })
    .catch(error => {
        console.log(error);
    })
