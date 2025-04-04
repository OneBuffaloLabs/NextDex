import React from "react";
import { Container, Nav } from "react-bootstrap";

function MonFooter() {
  const currentYear = new Date().getFullYear();
  const copyrightStartYearDB = 2008;
  const copyrightStartYearNintendo = 1995;

  return (
    <footer className="pokemon-footer">
      <Container className="py-3 py-md-4">
        <div className="d-md-flex justify-content-md-between align-items-md-center text-center text-md-start">
          <div className="footer-copyright mb-3 mb-md-0">
            All content & design © Pokémon Database, {copyrightStartYearDB}-
            {currentYear}.
            <br />
            Pokémon images & names © {copyrightStartYearNintendo}-{currentYear}{" "}
            Nintendo/Game Freak.
            <p className="mt-3 copyright-section">
              <a href="https://nextdex.elbaneh.dev/" target="_blank" rel="noopener noreferrer">
                NextDex
              </a>{" "}
              by{" "}
              <a href="https://github.com/OneBuffaloLabs" target="_blank" rel="noopener noreferrer">
                OneBuffaloLabs
              </a>{" "}
              is licensed under{" "}
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
                target="_blank"
                rel="license noopener noreferrer"
                style={{ display: 'inline-block' }}
              >
                CC BY-NC-SA 4.0
                <img
                  style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
                  src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                  alt=""
                />
                <img
                  style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
                  src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                  alt=""
                />
                <img
                  style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
                  src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
                  alt=""
                />
                <img
                  style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
                  src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
                  alt=""
                />
              </a>
            </p>
          </div>

          <Nav className="footer-nav justify-content-center justify-content-md-end">
            <Nav.Item>
              <Nav.Link href="/terms" className="footer-link px-2">
                Terms
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/privacy" className="footer-link px-2">
                Privacy Policy
              </Nav.Link>
            </Nav.Item>
            {/* Add more links here if needed */}
            {/* Example:
            <Nav.Item>
              <Nav.Link href="/contact" className="footer-link px-2">Contact</Nav.Link>
            </Nav.Item>
             */}
          </Nav>
        </div>
      </Container>
    </footer>
  );
}

export default MonFooter;
