import '/App.css';

const Login =()=>{
        
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [LastName, setLastName] = useState('');
    const [firstName , setFirstName] = useState('');
function Loginfunction(event) {
    event.preventDefault();
  const info={
        id:5,
        email:email,
        firstName:firstName,
        lastName :LastName,
        birthDate:"01/05/99",
       // ville:ville,
        password:password,
        role:"user",
        creationDate:"01/01/2021"
       // domaine:domaine
    }
    fetch("http://localhost:8082/user",{
        method:'POST',
        body:JSON.stringify(info),
        headers:{
          "Content-Type" : "application/json"
          },
          credentials :"same-origin"
 });
}
    
    
    return (
        <div className="login">
            <img className="login__logo"
            src="" alt=""/>

<div className="login__container">
            <h1> Sign-in</h1>
            <form>
            <h5> First Name</h5>
                <input type="text"  onChange=
                {e => setFirstName(e.target.value)}/>
            <h5> Last Name</h5>
                <input type="text"  onChange=
                {e => setLastName(e.target.value)}/>
                <h5> E_mail</h5>
                <input type="text" onChange={e => setEmail(e.target.value)}/>
                <h5> Password</h5>
                <input type='password'  onChange={e => setPassword(e.target.value)}/>
                <button className="login__signInButton"> Sign In</button>
                <button type="submit" className="login__registerButton" OnClick={(event)=>Loginfunction(event)}> Create your Account</button>
            </form>
            </div>
        </div>
        
    );
}
export default Login;