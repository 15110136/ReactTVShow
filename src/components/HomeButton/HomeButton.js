import React from 'react'

export default function HomeButton() {
  setTimeout(()=>{
    document.addEventListener('DOMContentLoaded', function() {
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems, {
          direction: 'left'
        });
        instances.open();
      });
    });
  },2000)
  return (
    <div className="fixed-action-btn">
      <a href="#header" className="btn-floating btn-large indigo">
        <i className="large material-icons">home</i>
      </a>
      <ul>
        <li><a href="#photos" className="tooltipped btn-floating red" data-tooltip="Photo's" data-position="top"><i className="material-icons">photo</i></a></li>
        <li><a href="#services" className="tooltipped btn-floating yellow darken-1" data-tooltip="Services" data-position="top"><i className="material-icons">book</i></a></li>
        <li><a href="#contact" className="tooltipped btn-floating green" data-tooltip="Contact" data-position="top"><i className="material-icons">email</i></a></li>
      </ul>
    </div>
  )
}
