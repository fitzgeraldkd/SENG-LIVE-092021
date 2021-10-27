import {useState} from 'react'
import {useHistory} from 'react-router-dom'
function Login(){
    const [login, setLogin] = useState(true)
    const [errors, setErrors] = useState(null)
    const [formData, setFormData] = useState({
        username:'',
        password: '',
      }) 
    const history = useHistory()
      
      const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
      }
//TODO: useRef to lock login attempts 
      const handleSubmit = (e) => {
          e.preventDefault()
          if(login){
              fetch('http://localhost:4000/users')
              .then(res => res.json())
              .then(users => {
                  const currentUser = users.find(user => user.username === formData.username)
                  if(currentUser && currentUser.password == formData.password){
                    history.push('/books')
                  } else {
                      console.log('hi')
                      setErrors("Incorrect Username and/or Password")
                  }
              })
          }
      }
  

    return(
        <>
            <h3>{errors?errors:null}</h3>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" onChange={handleChange}></input>
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange}></input>
                <input type="submit" value={login?"Login":"Sign up"}/>
            </form>
            <button onClick={() => setLogin(!login)}>{login?"Go to Sign up":"Go to Login"}</button>
        </>
    )
}

export default Login