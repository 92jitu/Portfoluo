import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css'; // Make sure to have your CSS file for custom styles

function Footer(){
    return(
        <>
        <footer className="footer">
        <Container>
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </Container>
      </footer>

        </>
    )
}


export default Footer;