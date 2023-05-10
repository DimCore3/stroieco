import { SocialMediaExternalLinks } from 'features';
import classes from './index.module.scss';
import LogoWithText from 'entities/logoWithText';

const Header = () => {
    return ( 
        <header className={classes.main_header}>
            <LogoWithText />
            <SocialMediaExternalLinks />
        </header>
     );
}
 
export default Header;