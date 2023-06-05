 export function validateEmptyInput(userName) {
    const profileData = document.querySelector(".profile-data");
    const msnErro = document.querySelector(".erro");

    if (userName.length === 0) {
        msnErro.style.height = "40px";
        profileData.style.display = "none";
        return true;

    }
    msnErro.style.height = "0";
    profileData.style.display = "block";
}
