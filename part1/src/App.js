import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const content = [
    { title: part1, qty: exercises1 },
    { title: part2, qty: exercises2 },
    { title: part3, qty: exercises3 }
  ]

  return (
    <div>
      <Header title={course} />
      <Content content={content}/>
      <Total amount={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App