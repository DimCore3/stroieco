import PhoneMapInfo from "entities/PhoneMapInfo";

type Props = {
    data:string
}

const AllBranch = ({data}: Props) => {
    
    function action() {
        console.log('address: ',data);
    }

    return ( 
        <PhoneMapInfo format='address' data={data} action={action} />
    );
}
 
export default AllBranch;