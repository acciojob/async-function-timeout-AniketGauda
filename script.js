//your JS code here. If required.
const promise = ()=>{
    let text = document.getElementById("text").value;
    let delay = document.getElementById("delay").value;

    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(text);
        },delay)
    })
}

document.getElementById("btn").onclick = (e)=>{
    e.preventDefault();
    let prnt = document.getElementById("output");
    async function display(){
        const data = await promise();
        prnt.innerHTML=`
            ${data}
        `
        // console.log(data);
    }

    display();
}