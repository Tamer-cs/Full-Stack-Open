import Header from './Header'
import Content from './Content'
import Total from './Total'


  
  const Course = ({ courses }) => (
    courses.map(course =>
        <div key={course.id}>
        
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total
            // total={
            //   course.parts[0].exercises +
            //   course.parts[1].exercises +
            //   course.parts[2].exercises
            // }
            total = {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
        />
        </div>
    )
  )

  export default Course