export const Header = () => {
    return (
        <header className="header">
            <div className="header-contacts">
                <div className="header-contacts-part">
                    <a href="tel:+79001234567">
                        <img src="images/icons8-phone-50.png" height={20} width={20} alt="phone" />
                        +375 (25) 123-45-67
                    </a>
                    <a href="mailto:blablabla@bla.com">
                        <img src="images/icons8-mail-48.png" height={20} width={20} alt="mail" />
                        blablabla@bla.com
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
            <nav>

            </nav>
        </header>
    )
}
