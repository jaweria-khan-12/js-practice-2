let age = +prompt("Enter your age:");
let cnic = prompt("Do you have CNIC? (yes/no)")

if (age >= 18 && age <= 50){ 
        
    if (cnic === "yes") {
        document.write("You are eligible for a driving license.");
    }else {
        document.write("You need a CNIC to apply for a driving license.");
    }
} else {
    document.write("You are not eligible for a driving license, Age must be 18 or above.");
}