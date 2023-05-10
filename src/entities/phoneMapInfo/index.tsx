import classes from './index.module.scss';

type Props = {
    format: 'phone' | 'address',
    data: string,
    action: Function,
}

const PhoneMapInfo = ({ format, data, action }: Props) => {
    const actionName = format === 'phone' ? 'Заказать звонок' : 'Все филиалы';

    return (
        <div className={classes.phone_map_info}>
            <img src={require('./assets/' + format + '.svg')} alt={format} onClick={() => action()} />
            <div className={classes.data_action}>
                <div className={classes.data}>
                    {format === 'phone'
                        ? <a href={'tel:' + data}>{data}</a>
                        : <p>{data}</p>
                    }
                </div>
                <div className={classes.action} onClick={() => action()}>
                    <p>{actionName}</p>
                </div>
            </div>
        </div>
    );
}

export default PhoneMapInfo;