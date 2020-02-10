/**
 * @author Jacob Reeb
 * @version 1.0
 * @Summary to calcualte how much money your gonna loose
 */

"use strict";
let balance;

function showBalance (){
    balance = Math.random() * (1000 - 25) + 25;
    balance = balance.toFixed(2);
    document.getElementById("balance").innerText = balance;

}
function yoink() {
    alert("Thank you ;) -Supreme leader");
}
function stop() {
    //stop refresh from form loading
}




