import classes from './index.module.scss';

const Logo = () => {
    return ( 
        <div className={classes.main_logo}>
            <img src={require('./assets/stroieco_logo.svg').default} alt="" />
            <p><strong>СТРОЙ</strong>ЭКОЛОГИЯ</p>
        </div>
     );
}
 
export default Logo;