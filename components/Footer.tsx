import '../styles/Footer.scss';
import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo.svg';
import {footerLinks} from "@/constants/constants";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__links-container">
                <div className="footer__rights">
                    <Image src={logo}
                           alt={"Logo"}
                           width={118}
                           height={18}
                           style={{objectFit: "contain"}}/>
                    <p className="footer__copyright">Carhub 2023<br/>All rights reserved&copy;</p>
                </div>
                <div className="footer__links">
                    {
                        footerLinks.map((link) => (
                            <div key={link.title}
                                 className="footer__link">
                                <h3 style={{fontWeight: "bold"}}>{link.title}</h3>
                                {link.links.map((item)=>(
                                    <Link key={item.title} href={item.url} style={{color: "#6B7280", textDecoration: "none"}}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
                <div className="footer__copyrights">
                    <p>@2023 Carhub. All rights reserved</p>
                    <div className="footer__copyrights-link">
                        <Link href={"/"} style={{ color: "#6B7280", textDecoration: "none"}}>Privacy Policy</Link>
                        <Link href={"/"} style={{ color: "#6B7280", textDecoration: "none"}}>Terms of Use</Link>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;
