import * as React from 'react'

function TesteScreen() {
  return <h2>ola</h2>
}

export default TesteScreen

// const [repositories, setRepositories] = React.useState([])
//   const [error, setError] = React.useState(null)

//   React.useEffect(() => {
//     fetch('http://api.github.com/users/GuilhermeW1/repos')
//       .then(response => response.json())
//       .then(data => {
//         setRepositories(data)
//       })
//       .catch(e => {
//         console.log(e)
//         setError(e)
//       })
//   }, [])
