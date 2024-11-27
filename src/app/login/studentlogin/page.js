import Link from "next/link";

export default function() {
    return(
        <div className="flex gap-4">
            <h1>Hello Students</h1>
            <Link href={"/login"}>Go to Login Page</Link><br/><br/>
            <Link href={"/"}>Go to Home Page</Link><br/><br/>
        </div>
    )
}