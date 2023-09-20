import { Button, ButtonGroup } from "@mui/material"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import MailOutlineIcon from "@mui/icons-material/MailOutline"

export const Header = () => {
    return (
        <header>
            <div className="header-contacts">
                <div className="header-contacts-part">

                    <a className="header-contacts__item" href="tel:+79001234567">
                        <LocalPhoneIcon />
                        <span className="header-contacts__itemText">+375 (25) 123-45-67</span>
                    </a>
                    <a className="header-contacts__item" href="mailto:blablabla@bla.com">
                        <MailOutlineIcon />
                        <span className="header-contacts__itemText">blablabla@bla.com</span>
                        
                    </a>
                </div>
                <div className="header-contacts-part">

                    <a href="www.vk.com" title="Мы в контакте!">
                        <img src="images/icons8-vk-48.png" height={40} width={40} alt="vk" />
                    </a>
                    <a href="www.instagram.com" title="Мы в инсте!">
                        <img src="images/icons8-instagram-48.png" height={40} width={40} alt="instagram" />
                    </a>

                </div>
            </div>
            <div className="hr" />
            <nav className="header-nav">
                <img className="header-nav__image" src="images/icons8-fast-shipping-64.png" height={64} width={64} alt="icon" />
                <div className="header-nav-items">
                    <ButtonGroup variant="text" aria-label="outlined primary button group">
                        <Button>Главная</Button>
                        <Button>Услуги</Button>
                        <Button>Цены</Button>
                        <Button>Контакты</Button>
                    </ButtonGroup>
                </div>
            </nav>
        </header>
    )
}
