import logo from "../../assets/logo.svg"

export default function Header() {
    return (
        <header>
            <img className="header-logo" src={logo} alt="Logo BeTalent" />
        </header>
    );
}