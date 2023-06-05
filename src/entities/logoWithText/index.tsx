import Logo from 'shared/ui/Logo';
import classes from './index.module.scss';

const LogoWithText = () => {
    return (
        <div className={classes.logo_with_text}>
            <Logo />
            <p className={classes.logo_text}>Материалы для ландшафтного дизайна и озеленения</p>
        </div>
    );
}

export default LogoWithText;