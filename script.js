let rounds = document.getElementsByClassName('round');

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        rounds[0].style.backgroundColor = 'red';
        resolve(); 
    }, 1000);
});

p.then(() => {
    setTimeout(() => {
        rounds[1].style.backgroundColor = 'orange';
    }, 3000);
}).then(() => {
    setTimeout(() => {
        rounds[0].style.backgroundColor = 'rgb(235, 231, 231)';
        rounds[1].style.backgroundColor = 'rgb(235, 231, 231)';
        rounds[2].style.backgroundColor = 'green';
    }, 5000);
}).catch(() => {
    alert('???');
});
