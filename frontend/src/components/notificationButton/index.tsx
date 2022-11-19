import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './style.css';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log(`Id: ${id} capturado com sucesso!`)
        })
}

function NotificationButton({ saleId }: Props) {


return (
    <>
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" onClick={()=> handleClick(saleId)}/>
        </div>
    </>
);
}

export default NotificationButton;


