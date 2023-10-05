import {  useNavigate } from "react-router-dom";

export default function RegisterForm()
{
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        let data = Object.fromEntries(new FormData(event.target));
        console.log(data);
        const user = await userRegister(data)
        console.log(user)
        if(user.message == "Creación Exitosa")
        {
            navigate("/userLogin")
        }
        
    }
    let config = {
        headers:new Headers({
            "Content-Type": "application/json"
        }), 
    };

    const userRegister = async(data)=>{
        
        config.method = "POST";
        config.body = JSON.stringify(data); 
        let res = await ( await fetch("http://127.0.0.10:3010/auth/users/register",config)).json();
        //console.log(res);
        return res       
        
    }  
    return(<>
        <section className="bg-gray-50 dark:bg-gray-900 flex items-center h-screen w-screen max-h-max ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen md:container max-h-max">
            
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <a href="#" className="flex items-center my-2 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="src\assets\book.png" alt="logo"/>
                        Bibliotech    
                    </a>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create account
                    </h1>
                    
                    <form className="space-y-4 md:space-y-6 grid grid-cols-1 gap-3 md:grid md:grid-cols-2 place-content-start" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gerson" required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                            <input type="text" name="last_name" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hernández" required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="gerson42" required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dni</label>
                            <input type="text" name="dni" id="dni" placeholder="123456789" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label  className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="/userLogin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>    
    
    </>)
}