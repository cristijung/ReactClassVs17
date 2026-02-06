import Link from "next/link";
import './btnText.css';

interface BtnTextProps {
    texto: string;
    href: string;
}

export default function BtnText({ texto, href }: BtnTextProps) {
    return(
       <>     
       <Link href={href} className="btn-custom">{texto}</Link>
       </>
    );
}