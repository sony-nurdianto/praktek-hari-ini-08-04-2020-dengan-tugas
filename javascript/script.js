let box =[]

axios.get('http://localhost:3000/list')
    .then((response) => {
        console.log(response)

        const dataHTML = document.querySelector("#list")
        data = response.data;

        response.data.forEach(item =>{
            const {id,name,address,email,phone,company} = item ;
            const itemHTML =`<div class="col-md-4 margin-btm"><div class="card">
            <img src="./images/images(2).jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">company name : ${company} email :${email} address:${address} phone :${phone} </p>
              <button class="btn btn-primary" onclick="ubah(${id})">edit</button>
              <button class="btn btn-primary" onclick="hapus(${id})">hapus</button>
            </div>
          </div>
          </div>`
            
            //`<li>
            //     name : ${name}
            //     <br>
            //     address : ${address}
            //     <br>
            //     email : ${email}
            //     <br>
            //     phone : ${phone}
            //     <br>
            //     company : ${company}
            //     <br>
            //     <button onclick="hapus(${id})">hapus</button>
            //     <button onclick="ubah(${id})">edit</button>
            // </li>`
            dataHTML.innerHTML += itemHTML
        })
    })
    .catch((pesanerror) =>{
        console.error(pesanerror)
    })
document.getElementById('save').addEventListener('click', function(event){
    event.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const address = document.getElementsByName('address')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const phone  = document.getElementsByName('phone')[0].value;
    const company = document.getElementsByName('company')[0].value;
    axios.post('http://localhost:3000/list' , {
        name,
        address,
        email,
        phone,
        company
    })
})

const hapus = (id) =>{
    axios.delete(`http://localhost:3000/list/${id}`);
}
const ubah = (id) => {
    const list = data.find(item =>{
        return item.id === id
    })

    if(list){
        const name = window.prompt('name',list.name);
        const address = window.prompt('address',list.address);
        const email = window.prompt('email',list.email);
        const phone = window.prompt('phone',list.phone);
        const company = window.prompt('company',list.company);
        axios.put(`http://localhost:3000/list/${id}`,{
            name,
            address,
            email,
            phone,
            company,
        });
    }
}

// const ubah = id => {
//     const contact = data.find(item => {
//         return item.id === id
//     })
    
//     if (contact){
//         const name = window.prompt('Name',contact.name);
//         const age = window.prompt('Age', contact.age);
//         axios.put(`http://localhost:3000/list/${id}`,{
//             name,
//             age
//         });
//     }
// }