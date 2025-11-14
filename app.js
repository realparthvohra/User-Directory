const usercontainer = document.getElementById('usercontainer')
const searchbtn = document.getElementById('searchbtn')
const searchbar = document.getElementById('searchbar')

const users = [
  {
    name: "Alexa Doe",
    email: "alexa@gmail.com",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Carter",
    email: "michael.carter@example.com",
    img: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sofia Martinez",
    email: "sofia.m@example.com",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Ethan Walker",
    email: "ethan.walker@example.com",
    img: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    name: "Priya Shah",
    email: "priya.shah@example.com",
    img: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    name: "Liam Thompson",
    email: "liam.t@example.com",
    img: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    name: "Ava Kapoor",
    email: "ava.kapoor@example.com",
    img: "https://randomuser.me/api/portraits/women/27.jpg"
  },
  {
    name: "Noah Brown",
    email: "noah.brown@example.com",
    img: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    name: "Emily Chen",
    email: "emily.chen@example.com",
    img: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    name: "Daniel Rivera",
    email: "daniel.r@example.com",
    img: "https://randomuser.me/api/portraits/men/18.jpg"
  }
];


function loadInUsers(users) {
    usercontainer.innerHTML = ""

    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('useritem');

    div.innerHTML = `
      <img src="${user.img}" class="userimg">
      <div class="innerdiv">
          <h3 class="username">${user.name}</h3>
          <p class="mail">${user.email}</p>
      </div>
    `;

    usercontainer.append(div)
    });

}

loadInUsers(users)

function searchusers() {
    const input = searchbar.value.toLowerCase();

    const filteredUsers = users.filter(u =>
        u.name.toLowerCase().includes(input) ||
        u.email.toLowerCase().includes(input)
    );

    loadInUsers(filteredUsers);
}


searchbtn.addEventListener('click', searchusers);


