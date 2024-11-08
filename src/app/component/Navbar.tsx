import Link from "next/link"

export default function Navbar(){
    return(
        
        <ul className="flex gap-4   bg-emerald-900 text-white text-1xl p-2 ">
            
            
             
           <li><Link href="/">Home</Link></li>  
           <li><Link href="/About">About</Link></li>
           <li>< Link href="/ContactUS">ContactUS</Link></li>
           <li><Link href="/Mehndi">Mehndi</Link ></li>
           <li><Link href="/Valima">Valima</Link ></li>
           
        </ul>
        
        
        )
}