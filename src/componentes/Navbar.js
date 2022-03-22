import { Link } from 'react-router-dom'
import './Navbar.css';
import $ from 'jquery';
import React, { useEffect } from 'react';


const Navbar = () => {


    function animation() {
      var tabsNewAnim = $('#navbarSupportedContent');
      var activeItemNewAnim = tabsNewAnim.find('.active');
      var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      var itemPosNewAnimTop = activeItemNewAnim.position();
      var itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
      $("#navbarSupportedContent").on("click", "li", function (e) {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
          "top": itemPosNewAnimTop.top + "px",
          "left": itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
      });
    }
  
    useEffect(() => {
  
      animation();
      $(window).on('resize', function () {
        setTimeout(function () { animation(); }, 500);
      });
  
    }, []);
  
  
  
    return (
      <nav className="navbar navbar-expand-lg navbar-mainbg">
  
        <li className="nav-item active">
          <Link className="navbar-brand navbar-logo" to='/'>
  
            <img src="#"></img>
  
          </Link>
        </li>
  
        <button
          className="navbar-toggler"
          onClick={function () {
            setTimeout(function () { animation(); });
          }}
          type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>
        </button>
  
  
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav ml-auto">
  
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
  
  
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i
                  class="fas fa-home">
  
                </i>Home
  
              </Link>
            </li>
  
            <li className="nav-item">
              <Link className="nav-link" to="/Formulario">
  
                <i
                  className=" fa-solid fa-handshake"> 
                </i>Formulario
              </Link>
            </li>
  
  
            <li className="nav-item">
              <Link className="nav-link" to="/Direitos">
  
                <i
                  className="fas fa-hands-helping  ">
                </i>Seus direitos
              </Link>
            </li>
  
  
            <li className="nav-item">
              <Link className="nav-link" to="Entrar">
  
                <i
                  className="fa-solid fa-circle-arrow-right">  
                </i>Entrar
              </Link>
            </li>
  
  
            <li className="nav-item">
              <Link className="nav-link" to="Cadastrar">
  
                <i
                  className="fas fa-sign-in-alt">
                </i>Criar conta
              </Link>
            </li>
  
  
            <li className="nav-item">
              <Link className="nav-link" to="Denuncias">
  
                <i
                  className="fas fa-edit">
                </i>Denuncias
              </Link>
            </li>
  
            
          </ul>
        </div>
      </nav>
    )
  }
  export default Navbar