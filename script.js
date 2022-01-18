let age;
let ageText;

let userName = prompt("Как вас зовут?");

let yearOfBirth = prompt("Год вашего рождения?");

if (yearOfBirth < 2022 && yearOfBirth > 1900) {
    calculatedAge = 2022 - yearOfBirth;
    age = calculatedAge % 100;
    
    if (age > 4 && age < 21) {
        ageText = "лет";
    } else {
        age = age % 10;
        if (age == 1) {
            ageText = "год";
        } else if (age > 1 && age < 5) {
            ageText = "года";
        } else {
            ageText = "лет";
        }
    }

    confirm(userName + ", вам " + calculatedAge + " " + ageText + "?");
} else {
    alert("Вы ввели некорректный год");
}
