// Constructor function for Student
function Student(name) {
    this.name = name;
    this.courses = [];
}

// Adding enroll method to the prototype
Student.prototype.enroll = function(course) {
    this.courses.push(course);
    return `${this.name} has enrolled in ${course}`;
};

// Creating students
const student1 = new Student("Emma");
const student2 = new Student("Liam");

console.log(student1.enroll("JavaScript Basics")); 
// Emma has enrolled in JavaScript Basics

console.log(student2.enroll("Data Structures")); 
// Liam has enrolled in Data Structures