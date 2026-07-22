const writeIcon = document.getElementById("write");
const postModal = document.getElementById("new-post-modal");
const profileIcon = document.getElementById("profile");
const profileModal = document.getElementById("profile-modal")
const logoutIcon = document.getElementById("logout");
const logoutModal = document.getElementById("logout-modal") 

writeIcon.addEventListener("click", () => {
  postModal.classList.add("show");
});

postModal.addEventListener("click", (event) => {
  if (event.target === postModal) {
    postModal.classList.remove("show");
  }
});

profileIcon.addEventListener('click', ()=>{
  profileModal.classList.add('show')
})

profileModal.addEventListener('click', (event)=>{
if(event.target === profileModal) {
  profileModal.classList.remove('show')
}
})

logoutIcon.addEventListener('click', () => {
  logoutModal.classList.add('show')
})

logoutModal.addEventListener('click', (event) => {
  if(event.target === logoutModal) {
    logoutModal.classList.remove('show')
  }
})
