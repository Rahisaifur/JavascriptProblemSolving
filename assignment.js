//https://github.com/Rahisaifur/JavascriptProblemSolving


//--function to convert kilometer to meter--

function kilometerToMeter(kilometer) {
    var meter = 0;
    if (kilometer <= 0) {
        return "distance can not be negative or 0";
    }
    else if (kilometer > 0) {
        meater = kilometer * 1000;
        return meter;
    }

}
// end of kilometer funciton

//--budget calculator
function budgetCalculator(watch, mobile, laptop) {
    var totalPrice = 0;

    if (watch <= 0 && mobile <= 0 && laptop <= 0) {
        return "You didn't buy anything or quantity of goods can't be negative";
    } else if (watch <= 0 && mobile <= 0) {
        console.log("You didn't buy Watch and Mobile");
    } else if (watch <= 0 && laptop <= 0) {
        console.log("You didn't buy Watch and Laptop")
    } else if (mobile <= 0 && laptop <= 0) {
        console.log("You didn't buy Mobile and Laptop")
    } else if (watch <= 0) {
        console.log("You didn't buy Watch");
    } else if (mobile <= 0) {
        console.log("You didn't buy Mobile.");
    } else if (laptop <= 0) {
        console.log("You didn't buy Laptop.");
    }

    totalPrice = watch * 50 + mobile * 100 + laptop * 500;

    return totalPrice;
}

//end of budgetCalculator


//--hotelCost

function hotelCost(days) {
    var totalCost = 0;
    var first10DayCost = 10 * 100;
    var first20DayCost = 10 * 100 + 10 * 80;
    if (days <= 0) {
        return "you can't stay negative number of days";
    }
    else if (days <= 10) {
        totalCost = days * 100;
        return totalCost;
    }
    else if (days <= 20) {

        var remainingDay = days - 10;
        var remainingDayCost = remainingDay * 80;
        totalCost = first10DayCost + remainingDayCost;
        return totalCost;
    }
    else if (days > 20) {
        var remainingDay = days - 20;
        totalCost = first20DayCost + remainingDay * 50;
        return totalCost;
    }


}
//end of hotelCost function---

// megaFriend-------------

function megaFriend(friendsName) {
    var megaName = friendsName[0];
    if (friendsName.length == 0) {
        return "no name found";
    }
    else {
        for (var i = 0; i <= friendsName.length; i++) {
            var name = friendsName[i];
            if (name > megaName) {
                megaName = name;
            }

        }
    }
    return megaName;
}
//end of mefaFriend fucntion

// ------- Code to test the functions-----

var check = prompt("Enter the number accordingly to choose the program you want to use: 1: kilometerToMeter 2: budgetCalculator 3: hotelCost 4: megaFriend");
if (check == 1) {
    var meter;
    var km = prompt("Enter the number")
    meter = kilometerToMeter(km);
    console.log(meter + " meter");
}
else if (check == 2) {
    var watch = prompt("How many watches?");
    var laptop = prompt("How many laptops?");
    var mobile = prompt("How many mobiles?");
    var price;
    price = budgetCalculator(watch, mobile, laptop);
    console.log("total cost is " + price);
}
else if (check == 3) {
    var hotelTotalCost;
    var days = prompt("how many days you stayed?");
    hotelTotalCost = hotelCost(days);

    console.log(hotelTotalCost + " $");
}
else if (check == 4) {
    var largeName;
    var element = prompt("How many names?")
    var names = [];

    for (var i = 0; i < element; i++) {
        names[i] = prompt("enter name:")
    }

    largeName = megaFriend(names);
    console.log(largeName);


}