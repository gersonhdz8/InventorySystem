import {useState} from "react"
import {  useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
//import { loginUser } from "../services/fecth.js"

export default  function LoginForm()
{
    const[username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();    

    const handleSubmit = async (event) => {
        event.preventDefault()
        let data = Object.fromEntries(new FormData(event.target));
        console.log(data);
        const user = await userLogin(data)
        console.log(user)
        if(user.status === 200)
        {
            if(user.infoUser.role== "client")
            {
                Cookies.set("JWT", user.token, { expires: 7 });
                navigate('/clientView')
            }
            else if(user.infoUser.role == "admin")
            {
                Cookies.set("JWT", user.token, { expires: 7 });
                navigate('/adminView')    
            }
            else if(user.infoUser.role == "superadmin")
            {
                Cookies.set("JWT", user.token, { expires: 7 });
                navigate('/superadminView')    
            }
    }  
}  

    let config = {
        headers:new Headers({
            "Content-Type": "application/json"
        }), 
    };

    const userLogin = async(data)=>{
        
        config.method = "POST";
        config.body = JSON.stringify(data);
        let res = await ( await fetch("http://127.0.0.10:3010/auth/users/login",config)).json();
        //console.log(res);
        return res       
        
    }    

    return(
    
    <>  
        <section className="bg-gray-50 dark:bg-gray-900 w-screen h-screen flex items-center ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 place-content-center place-items-center">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="src\assets\book.png" alt="logo"/>
                BiblioTech    
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gersonhdz42" required="" value={username} onChange={(target) => setUsername(target.value)} />
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password} onChange={(target)=> setPassword(target.value)}/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label  className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" data-accion="POST" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="/userRegister" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
    
    
    </>)
    }



