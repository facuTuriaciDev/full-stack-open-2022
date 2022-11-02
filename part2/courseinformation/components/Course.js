const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => {
  const total = sum.reduce((acc, cur) => acc + cur.exercises, 0);
  return <b>Total of exercises {total}</b>
}


const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />
    <Total sum={parts} />
  </>

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course