import './login.css';
import {Link, useNavigate, useLocation, NavLink} from 'react-router-dom';
import balanceImg from '../images/addCoinsIcon.png'
import shopImg from '../images/cartIcon.png'
import productAdditionImg from '../images/addProdIcon.png'
import messageIcon from '../images/messagesIcon.png'

const AdminMenu = () => {

    return (
        <nav>
            <div className="card-adm">
            <NavLink to='#'>
            <div className='adm-card1 adm-card'>
                <div>Запросы</div>
                <div><img className='adm-icons' src={messageIcon}/></div>
            </div>
            </NavLink>
                <NavLink to='/'>
            <div className='adm-card2 adm-card'>
                <div>Магазин</div>
                <div><img className='adm-icons' src={shopImg}/></div>
            </div>
                </NavLink>
                <NavLink to='#'>
            <div className='adm-card3 adm-card'>
                <div>Добавить товар</div>
                <div><img className='adm-icons' src={productAdditionImg}/></div>
            </div>
                </NavLink>
                <NavLink to='/adm-balance'>
                <div className='adm-card4 adm-card'>
                    <div>Изменить Баланс</div>
                    <div><img className='adm-icons' src={balanceImg}/></div>
                </div>
                </NavLink>
            </div>

            </nav>
    )
}

export default AdminMenu