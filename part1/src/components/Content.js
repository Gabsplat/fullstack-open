const Part = (props) => {
    return(
        <>
            <p>{props.title} {props.qty}</p>
        </>
    )
}

const Content = (props) => {
    return props.content.map((el, i) => {
        return <Part title={el.title} qty={el.qty} />
    })
  }
  
  export default Content