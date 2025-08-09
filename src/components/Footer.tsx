const Footer = () => {
  return (
    <footer className="footer grid grid-cols-3 bg-stone-950 p-10 mt-25">
      <div className="flex flex-col">
        <h5 className="text-neutral-400 text-xl mb-1">Services</h5>
        <a>Branding</a>
        <a>Design</a>
        <a>Marketing</a>
        <a>Advertisement</a>
      </div>
      <div className="flex flex-col">
        <h5 className="text-neutral-400 text-xl mb-1">Company</h5>
        <a>About us</a>
        <a>Contact</a>
        <a>Jobs</a>
        <a>Press kit</a>
      </div>
      <div className="flex flex-col">
        <h5 className="text-neutral-400 text-xl mb-1">Legal</h5>
        <a>Terms of use</a>
        <a>Privacy policy</a>
        <a>Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
