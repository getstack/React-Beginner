import React from 'react';


function ListRendering() {

   const employeeList = [
{
   id : 1,
   name :'Mahpara',
   age : 28,
   Skill :'Project manager'
},
{
    id : 1,
    name :'Talha',
    age : 25,
    Skill :'Web Developer'
},
 {
    id : 1,
    name :'Adnan',
    age : 24,
    Skill :'SEO'
}

]
   

const result = employeeList.map (person => <h2>I am  {person.name} i am {person.age} old  i am {person.Skill}</h2>)

return <div>{result}</div>

}

export default ListRendering;
