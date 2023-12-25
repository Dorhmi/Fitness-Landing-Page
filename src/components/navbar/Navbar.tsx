import logo from '@/assets/Logo.png'

type Props = {}

const Navbar = (props: Props) => {
return (
    <nav>
        <div>
        <img src={logo} alt="logo" />
        <div>
            <div>
                <p>Home</p>
                <p>Benefits</p>
                <p>Our Classes</p>
                <p>Contact Us</p>
            </div>
            <div>
                <p>Sign In</p>
                <button>Become a Member</button>
            </div>
        </div>
        </div>
    </nav>
)
}

export default Navbar