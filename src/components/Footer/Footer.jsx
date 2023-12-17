/* eslint-disable react/no-unknown-property */
const Footer = () => {
  return (
    <div className=""> 
      <footer className="footer bg-black p-10 text-white ">
        <aside>
         <img className="w-44 mb-4" src="https://i.ibb.co/SRT8dqF/logo2-removebg-preview.png" alt="" />
          <p>Copyright © 2023 - <br />All right reserved by E-Commerce</p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;