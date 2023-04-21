// import React from "react";
// import { Link } from "react-router-dom";
// // import topview from "../../../src/topview.png";

// import Auth from "../../utils/auth";

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };

//   return (
//         <header className="bg-secondary mb-4 py-2 flex-row align-center">
//           <div className="container flex-row justify-space-between-lg justify-center align-center">
//             <Link to="/">
//               <h1>Show Stopper</h1>
//             </Link>

//             <nav className="text-center">
//               {Auth.loggedIn() ? (
//                 <>
//                   <Link to="/profile">${`username`}</Link>
//                   <a href="/" onClick={logout}>
//                     Logout
//                   </a>
//                   <Link to="/eolist">EOList</Link>
//                 </>
//               ) : (
//                 <>
//                   <Link to="/login">Login</Link>
//                   <Link to="/signup">Signup</Link>
//                 </>
//               )}
//             </nav>
//           </div>
//         </header>
//       );
//     };

// export default Header;

/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function Header() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/topview.png") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("../../assets/img/lion2.png")}
            ></img>
            <h1 className="h1-seo">The SHOW</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
