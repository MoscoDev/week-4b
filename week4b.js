// Joe’s Automotive Shop services foreign cars and specializes in servicing cars made by Mercedes,
// Porsche, and BMW. When a customer brings a car to the shop, the manager gets the customer’s
// name, address, and telephone number. The manager then determines the make, model, and year
// of the car and gives the customer a service quote. The service quote shows the estimated parts
// charges, estimated labor charges, sales tax, and total estimated charges.


class Customer {
    constructor(name, address, phoneNumber) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}
let moses = new Customer("Moses", "123 Main St", "123-456-7890");
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    checkMake() {
        if (this.make === "BMW" || "Porsche" || "Mercedes" ) {
            return this.make;
        } else {
            return "sorry we do not service this car make at joe's automotive shop";
        } 
    }
}

let mosesCar = new Car("Mercedes", "X5", "2020");
console.log(mosesCar.checkMake());

class Service {
    constructor(customer, carMake, partsCharges, laborCharges, salesTax) {
        this.customer = customer;
        this.carMake = carMake;
        this.partsCharges = partsCharges;
        this.laborCharges = laborCharges;
        this.salesTax = salesTax;

    }
    getServiceQuote() {
        return {
            customer : this.customer,
            car : this.carMake,
            partsCharges: this.partsCharges,
            laborCharges: this.laborCharges,
            salesTax: this.salesTax,
            totalCharge: (this.partsCharges + this.laborCharges) * this.salesTax 
        }
    }
}
let MosesService = new Service(moses.name, mosesCar.checkMake(), 100, 100, 0.8);
console.log(MosesService.getServiceQuote());

// “ Hameed is a Yoruba boy Living in Abuja, he is a student of Nile University
// studying Computer Science, He has a two friends John and James, they are
// also students of Nile University.
// Hameed wants to apply to Seamfix as a Program manager, so he need to
// send his credentials. also he wants to create a domiciliary account with
// Zenith Bank,
// Model Hameed using OOP, and outline the principle of OOP you applied at
// any point.
// ”



class Person {
    constructor(name, tribe, occupation, school, friends, bankAccount) {
        this.name = name;
        this.tribe = tribe;
        this.occupation = occupation;
        this.school = school;
        this.friends = friends;
        this.bankAccount = bankAccount;
    }
     
}




// Create an object called shape that has the type property and a
// getType() method.
// 2. Define a Triangle() constructor function whose prototype is
// shape. Objects created with Triangle() should have three own
// properties—a, b, and c, representing the lengths of the sides of a
// triangle.
// 3. Add a new method to the prototype called getPerimeter().


function Shape(type) {
    this.type = type;
    return {
    type: type,
    getType: function(){
        return this.type;
    }
}
}
Shape.prototype.Triangle = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    return {
        a: a,      

        b: b,
        c: c,
        getPerimeter: function() {
            return this.a + this.b + this.c;
        }
    }
}
        


console.log(Shape("triangle").type);
