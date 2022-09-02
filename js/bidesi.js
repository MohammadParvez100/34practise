const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}

const displayUser = users => {
    const userContainer = document.getElementById('users-container');
    for (const user of users) {
        const useDiv = document.createElement('div');
        useDiv.classList.add('user')
        useDiv.innerHTML = `
         <h3>user name: </h3>
         <p>Email: ${user.email}</p>
         <p>location info:${user.location.city}  ${user.location.country}</p>

        
        `
        userContainer.appendChild(useDiv)
    }
}
loadUser();