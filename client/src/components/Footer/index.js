import React from 'react';

const Footer = () => {
  return (

    <footer className="w-100 mt-auto bg-secondary p-4">
    <section id="lab_social_icon_footer">
      <div className="container is-fullhd level-right">
      <div className="container">&copy;{new Date().getFullYear()} by Kenny 🔥🌌🌳🦝🚀 </div>
        <div className="text-center level-item">
          <a href="https://www.facebook.com/bootsnipp">
            <i id="social-fb" className="fa fa-facebook-square fa-3x social"></i>
          </a>
          <a href="https://twitter.com/bootsnipp">
            <i id="social-tw" className="fa fa-twitter-square fa-3x social"></i>
          </a>
          <a href="https://plus.google.com/+Bootsnipp-page">
            <i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i>
          </a>
          <a href="https://github.com/kea6t">
            <i id="social-gh" className="fa-brands fa-github fa-3x social"></i>
          </a>
          <a href="https://linkedIn.com">
            <i id="social-ln" className="fa-brands fa-linkedin fa-3x social"></i>
          </a>
        </div>
      </div>
    </section>
    </footer>

    // <footer className="w-100 mt-auto bg-secondary p-4">
    //   <div className="container">
    //     &copy;{new Date().getFullYear()} by Lernantino
    //   </div>
    // </footer>
  );
};

export default Footer;
