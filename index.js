const nomeDoHeroi = "Nyah Cat"
let HP = 0
let XP = 2001
const rank = "O herói de nome " + nomeDoHeroi + " está no nível de "

if (XP < 1000) {
    console.log(rank + "Ferro.")
}
else if (XP > 1000 && XP < 2001) {
    console.log(rank + "Bronze.")
}
else if (XP > 2000 && XP < 5001) {
    console.log(rank + "Prata.")
}
else if (XP > 6000 && XP < 7001) {
    console.log(rank + "Ouro.")
}
else if (XP > 7000 && XP < 8001) {
    console.log(rank + "Platina.")
}
else if (XP > 8000 && XP < 9001) {
    console.log(rank + "Ascendente.")
}
else if (XP > 9000 && XP < 10001) {
    console.log(rank + "Imortal.")
}
else if (XP > 10000) {
    console.log(rank + "Radiante.")
}
