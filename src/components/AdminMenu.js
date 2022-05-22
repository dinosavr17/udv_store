import './login.css';
import axios from "../api/axios";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import balanceImg from '../images/addCoinsIcon.png'
import shopImg from '../images/cartIcon.png'
import productAdditionImg from '../images/addProdIcon.png'
import messageIcon from '../images/messagesIcon.png'
const AdminMenu = () => {

    return (
            <div className="card">
            <div className='adm-card1 adm-card'>
                <div>Запросы</div>
                <div><img className='adm-icons' src={messageIcon}/></div>
            </div>
            <div className='adm-card2 adm-card'>
                <div>Магазин</div>
                <div><img className='adm-icons' src={shopImg}/></div>
            </div>
            <div className='adm-card3 adm-card'>
                <div>Добавить товар</div>
                <div><img className='adm-icons' src={productAdditionImg}/></div>
            </div>
                <div className='adm-card4 adm-card'>
                    <div>Изменить Баланс</div>
                    <div><img className='adm-icons' src={balanceImg}/></div>
                </div>
            </div>
    )
}

export default AdminMenu