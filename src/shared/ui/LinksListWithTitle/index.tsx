import { Link } from 'react-router-dom';
import { Props } from './model';
import classes from './styles/index.module.scss';

const LinksListWithTitle = ({ title, list, action = () => {} }: Props) => {

    return (
        <div className={classes.links_list_with_title}>
            <h2>{title}</h2>
            <div className={classes.links_list_in_header}>
                {list.map((link) =>
                    <Link onClick={action} className={classes.link} to={`./${link.href}`}>{link.name}</Link>
                )}
            </div>
        </div>
    );
}

export default LinksListWithTitle;