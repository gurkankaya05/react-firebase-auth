import { useState } from "react";

import { register } from "../firebase";


export default function Register () {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  
    

    const handleSubmit = async e => {
    e.preventDefault();
    const user = await  register(email,password);

    }


    return(
        <form className="max-w-xl mx-auto grid gap-y-4 py-4" onSubmit={handleSubmit}>


                             {/* EMAİL  */}
         <div>
             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
             <div className="mt-1">
                <input type="email"

                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com" 
                value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />

             </div>
             
             </div>      

                            {/* PASSWORD */}
             <div>
             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Parola</label>
             <div className="mt-1">
                <input type="password"
              
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="****" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />

             </div>
             
             </div>       


        <div>
        <button  disabled={!email  || !password} type="submit" className="inline-flex disabled:opacity-20 cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-indigo-800 hover:bg-indigo-700 focus:outline-none text-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "> Kayıt ol</button>
        </div>
   </form>
    )
}