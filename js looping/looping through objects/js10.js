//calculate average salary 
const salaries = {
    konstas : 6000 ,
    virat : 9000 ,
    bumrah : 6000000
} ;

const totalSalary = Object.values(salaries).reduce((sum , salary) => sum + salary, 0) ;
const averageSalary = totalSalary / Object.values(salaries).length ;

console.log(`average salary`, averageSalary) ;