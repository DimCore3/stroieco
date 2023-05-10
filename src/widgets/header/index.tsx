import classes from './index.module.scss';
import LogoWithText from 'entities/logoWithText';
import { PhoneMapInfoAllBranch, PhoneMapInfoCallOrder, SocialMediaExternalLinks } from 'features';

const Header = () => {
    return (
        <header className={classes.main_header}>
            <LogoWithText />
            <PhoneMapInfoAllBranch data='Воронеж, Монтажный проезд, 7'/>
            <PhoneMapInfoCallOrder data='+7(999)988-64-11'/>
            <SocialMediaExternalLinks />
        </header>
    );
}

export default Header;