const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => {
  const total = sum.reduce((acc, cur) => acc + cur.exercises, 0);
  return <b>Total of exercises {total}</b>
}


const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return(
    <div>
    {parts.map(part => <Part key={part.id} part={part} />)}
      <Total sum={parts} />
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course[0].name} />
      <Content parts={course[0].parts} />
      <Header course={course[1].name} />
      <Content parts={course[1].parts} />
    </div>
  )
}

/*
2.5: separate module
Declare the Course component as a separate module, which is imported by the App component. 
You can include all subcomponents of the course into the same module.

I have included all subcomponents likle Header, Content, Total and Part into the same module Course.js a couple exercises ago.
*/

export default Course