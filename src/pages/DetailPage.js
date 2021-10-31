import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { useParams } from "react-router-dom";

const DetailPage = () => {

    let { id } = useParams();
    console.log(useParams);
    id=parseInt (id);

    return (

        <ItemDetailContainer id={id} />
        
    )
}

export default DetailPage

