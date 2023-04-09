#!/usr/bin/node

"use strict";

const mark = {
    fullName: "Mark Miller",
    weight: 78,
    height: 1.69,
    
    calcBMI: function() {
        this.bmi = this.weight / (this.height * this.height);
        return (this.bmi);
    },
};

const john = {
    fullName: "John Smith",
    weight: 92,
    height: 1.95,
    
    calcBMI: function() {
        this.bmi = this.weight / (this.height * this.height);
        return (this.bmi);
    },
};
john.calcBMI();
mark.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}