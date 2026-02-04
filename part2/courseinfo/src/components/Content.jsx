import Part from './Part.jsx'

const Content = (props) => (
  <div>
    {/* <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} /> */}

    {props.parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

export default Content