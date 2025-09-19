import Link from "next/link";
export default function Signin() {
 return (
   <div>
     <h3>Sign in</h3>
     <input placeholder="username" defaultValue="GarrickCheng" /> <br />
     <input placeholder="password" type="password" defaultValue="1234567" />
     <br />
     <Link href="Profile"> Sign in </Link> <br />
     <Link href="Signup"> Sign up </Link>
   </div>
);}
