window.onload=()=>{
    option=()=>{
    let who = ['the government','my long lost cousin','his radioactive frog','my seasonal depression'];
    let what = ['ate me','pissed on me','launched me','annihilated me'];
    let when = ['before the class','before i clocked in','when I finished','during my lunch','while I was coding'];

    let who2 = (Math.floor(Math.random() * who.length));
    document.querySelector('#excuse').innerHTML= who[who2];

    let what2 = (Math.floor(Math.random() * what.length));
    document.querySelector('#excuse').innerHTML= what[what2];

    let when2 = (Math.floor(Math.random() * when.length));
    document.querySelector('#excuse').innerHTML= when[when2];

    console.log()
}
}