

function getUser(id){

    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch(ee => console.log(ee))
}

async function showUserName (id){

    const user = await getUser(id)
    console.log(`O nome é ${user.data.first_name}`)

}

showUserName(7)