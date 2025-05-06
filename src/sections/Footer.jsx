import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Startenzabusiness@gmail.com</p>
          <p>+91 93100 25878</p>

        </div>
        <div className="socials">
          {socialImgs.map((img, index) => (
            <div key={index} className="icon">
              <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} alt="social icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Startenza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
