import Link from "next/link";

function ProtectedRoute() {
  return <>
    <h1 className='text-white text-4xl'>protected route</h1>
    <Link href='/logout' className='text-white text-4xl'>go to logout</Link >
  </>
}

export default ProtectedRoute;