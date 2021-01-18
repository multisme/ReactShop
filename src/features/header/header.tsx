import {Link} from "react-router-dom";
import ShowcaseTitle from "features/showcase/showcaseTitle"

const Header = () =>{
        const cart_quantity = 0;
        return (
                <header className={"flex-betweened"}>
                        <ShowcaseTitle />
                        <Link to="cart" className="cart">
                        <div>
                        <span>cart</span>
                        <span>x</span>
                        <span>{cart_quantity}</span>
                        </div>
                        </Link>
                </header>
        )
}

export default Header;
