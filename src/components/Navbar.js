import "../styles/navbar.scss"

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="brand">
        <h1>AnimeBinge</h1>
      </div>
      <div className="nav-menu">
        <h1>Home</h1>
        <h1>Discover</h1>
        <h1>About Us</h1>
        <button className="signup">
          Sign Up
        </button>
        <button className="login">
          Log In
        </button>
      </div>
    </div >
  )
}