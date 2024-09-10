import _ from "lodash";

// console.log(_);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(_.first(numbers))
// console.log(_.last(numbers))
// console.log(_.head(numbers))
// console.log(_.nth(numbers,4))

const chunked = _.chunk(numbers, 3);
// console.log(chunked);

const diff = _.difference(numbers, [1, 4, 5]);
// console.log(diff);

const dropped1 = _.drop(numbers, 2);
const dropped2 = _.drop(numbers, 4);
// console.log(dropped1);
// console.log(dropped2);

const take1 = _.take(numbers, 4);
const take2 = _.take(numbers, 6);
// console.log(take1);
// console.log(take2);

const filled = _.fill(Array(4), 7);

// console.log(filled)

const complex = [1, 2, 3, [4, 3, [2, 3, 4, [5, 6]], [45]]];
// console.log(_.flatten(complex));
// console.log(_.flattenDepth(complex, 2));
// console.log(_.flattenDeep(complex));

const c = [1, 2, 3];
const d = [2, 4, 5, 6];

// console.log(_.union(c, d));
// console.log(_.intersection(c, d));

const employees = [
  {
    id: 1,
    first_name: "Gregor",
    last_name: "Roddick",
    email: "groddick0@dagondesign.com",
    gender: "Male",
    salary: "$2222.00",
  },
  {
    id: 2,
    first_name: "Shawnee",
    last_name: "Pidgeley",
    email: "spidgeley1@hao123.com",
    gender: "Female",
    salary: "$345.44",
  },
  {
    id: 3,
    first_name: "Karly",
    last_name: "Simonel",
    email: "ksimonel2@alibaba.com",
    gender: "Female",
    salary: "$3345.44",
  },
  {
    id: 4,
    first_name: "Vlad",
    last_name: "Barden",
    email: "vbarden3@psu.edu",
    gender: "Male",
    salary: "$1345.44",
  },
  {
    id: 5,
    first_name: "Malissa",
    last_name: "Varfolomeev",
    email: "mvarfolomeev4@irs.gov",
    gender: "Female",
    salary: "$6345.44",
  },
  {
    id: 6,
    first_name: "Howard",
    last_name: "Searl",
    email: "hsearl5@livejournal.com",
    gender: "Male",
    salary: "$5456.44",
  },
  {
    id: 7,
    first_name: "Beryle",
    last_name: "Regglar",
    email: "bregglar6@bandcamp.com",
    gender: "Female",
    salary: "$3445.44",
  },
  {
    id: 8,
    first_name: "Karin",
    last_name: "MacEveley",
    email: "kmaceveley7@plala.or.jp",
    gender: "Genderqueer",
    salary: "$34534.44",
  },
  {
    id: 9,
    first_name: "Nolly",
    last_name: "Patsall",
    email: "npatsall8@stumbleupon.com",
    gender: "Male",
    salary: "$9345.44",
  },
  {
    id: 10,
    first_name: "Enrika",
    last_name: "Strongman",
    email: "estrongman9@mediafire.com",
    gender: "Female",
    salary: "$345456.44",
  },
];

// console.log(_.countBy(employees));
// console.log(_.countBy(employees, "gender"));
// console.log(_.groupBy(employees, "gender"));
const maxSalary = _.orderBy(employees, "salary", "desc");
// console.log(maxSalary, "DDs");

const allEmpNames = _.map(employees, "first_name");
// console.log(allEmpNames);

const totalSalary = _.reduce(
  employees,
  (prev, curr) => prev + curr.salary.split("$")[1] * 1,
  0
);
console.log(totalSalary);

const grpByGender = _.groupBy(employees, "gender");
const totalSalaryByGender = _.map(grpByGender,(grp)=>_.reduce(
    grp,
    (prev, curr) => prev + curr.salary.split("$")[1] * 1,
    0
))
console.log(totalSalaryByGender)