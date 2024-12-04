import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
 

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="home">
      <div className="home-header-div">
        <header className="home-header"> 
          <a href="">Autores</a>
          <a href="">Libros</a>
          <div className="img-logo">
          <img 
           src="/imgs/secretos.png"
           alt="secretos"
           />
           </div>
        </header>
      </div>
      <div className="home-ingreso">
        <div className="home-login-buttton">
          <Link to = "biblioteca">
          <button>Hola</button>
          </Link>
        </div>
        <div className="home-sigin-button">
          <a href=""></a>
          <span>Registrarse</span>
        </div>
      </div>



      <div className="biblioteca">
      <div className="book-header-div">
        <header className="book-header"> 
          <div className="img-logo2">
          <img 
           src="/logo.svg"
           alt="secretos"
           />
           </div>
        </header>
        </div>


      </div>
    </div>
    
  );
};