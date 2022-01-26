const companies=[
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Finance", start: 1981, end: 2003},
    {name: "Company Three", category: "Finance", start: 1981, end: 2003},
    {name: "Company Four", category: "Finance", start: 1981, end: 2003},
    {name: "Company Five", category: "Finance", start: 1981, end: 2003},
    {name: "Company Six", category: "Retail", start: 1981, end: 2003},
    {name: "Company Seven", category: "Finance", start: 1981, end: 2003},
    {name: "Company Eight", category: "Finance", start: 1981, end: 2003},
    {name: "Company Nine", category: "Finance", start: 1981, end: 2003}
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
/**
for(let i=0; i<companies.length; i++){
    console.log(companies[i]);
}
 **/

/**
// forEach
companies.forEach(function(company){
    console.log(company.name);
});
 **/

/** filter **/

/**
let canDrink = [];
for(let i=0; i<ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}
**/
/**
const canDrink = ages.filer(function(age){
    if(age >= 21){
        return true;
    }
});
 **/
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

/** Filter Retail */

/**
const retailCompanies = companies.filter(function(company){
    if(company.category === "Retail"){
        return true;
    }

});
 */
/**
const retailCompanies = companies.filter(company => company.category === "Retail");
//Get 80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
//Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >=10));

console.log(lastedTenYears);
 **/
/**
//MAP
//Create array of company names
const companyNames = companies.map(function(company){
    return company.name;
});
const agesSquare = ages.map(age=> Math.sqrt(age));
*/
//SORT

/**
const sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start>c2.start){
        return 1;
    } else {
        return -1;
    }
});
*/
/**
const sortedCompanies = companies.sort((a, b)=>(a.start>b.start ? 1:-1));
console.log(sortedCompanies);
 */
//REDUCE

const ageSum = ages.reduce((total, age)=> total+age,0);
console.log(ageSum);