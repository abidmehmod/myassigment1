import Link from "next/link"

Link
export default function Navbar(){
    return(
        <ul className="flex gap-10 bg-orange-600">
      <li> <Link href="/">Home</Link></li>
      <li> <Link href="/about">About</Link></li>
      <li> <Link href="/contact">Contact</Link></li>
      <li> <Link href="/courses">Courses</Link></li>
      <li> <Link href="/information">Information</Link></li>
    </ul>
    )
}