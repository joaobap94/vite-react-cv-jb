import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AppNavbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageToggle = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#about">{t('navbar.brand')}</Navbar.Brand>
        <Button 
          variant="outline-light" 
          size="sm" 
          onClick={handleLanguageToggle} 
          className="ms-auto me-2 d-lg-none"
          aria-label={`Switch to ${i18n.language === 'pt' ? 'English' : 'Portuguese'}`}
        >
           {t('navbar.toggle_lang')}
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">{t('navbar.about')}</Nav.Link>
            <Nav.Link href="#certificates">{t('navbar.certificates')}</Nav.Link>
            <Nav.Link href="#experience">{t('navbar.experience')}</Nav.Link> 
            <Nav.Link href="#grades">{t('navbar.grades')}</Nav.Link>
            <Nav.Link href="#contact">{t('navbar.contact')}</Nav.Link>
          </Nav>
          <Button 
            variant="outline-light" 
            size="sm" 
            onClick={handleLanguageToggle} 
            className="d-none d-lg-inline-block"
            aria-label={`Switch to ${i18n.language === 'pt' ? 'English' : 'Portuguese'}`}
          >
             {t('navbar.toggle_lang')}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
