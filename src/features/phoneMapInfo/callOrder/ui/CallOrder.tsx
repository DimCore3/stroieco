import PhoneMapInfo from "entities/PhoneMapInfo";

type Props = {
    data:string
}

const CallOrder = ({data}: Props) => {
    
    function action() {
        console.log('phone: ',data);
    }

    return ( 
        <PhoneMapInfo format='phone' data={data} action={action} />
    );
}
 
export default CallOrder;