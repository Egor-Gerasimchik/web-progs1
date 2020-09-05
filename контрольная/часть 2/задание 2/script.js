alert("Вы зашли на сайт Егора Герасимчика");
alert("Если хочешь что-то сделать, то сделай это...");


function userAge(event) {
    let age = 2020 - userYear.value;
    alert("Сейчас " + userName.value + " ровно " + age);
}

userBtn.addEventListener("click", userAge);