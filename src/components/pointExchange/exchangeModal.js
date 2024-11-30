import {useState} from 'react';
import {usePoint , useSetUserPoint} from '../../redux/userData';
import { useDispatch } from 'react-redux';

const ExchangeModal = ({setIsModalOpen , content}) => {
    const [test, setTest] = useState(true);
    const userpoint = usePoint();
    const dispatch = useDispatch();
    const setPoint = useSetUserPoint(dispatch);

    return(        
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={()=>{setIsModalOpen(false)}}>
          &times;
        </span>
        <h2></h2>
        <p>{content.name}의 {content.points}입니다. 교환하시겠습니까?</p>
        <p></p>
        {
          !test? <p>고객님의 포인트가 부족합니다.</p> : null
        }
        <button onClick={()=>{
          const exchangedPoint = Number(userpoint) - Number(content.points); 
          if(exchangedPoint < 0){setTest(false);return;}
          setPoint(exchangedPoint);setIsModalOpen(false);
          }}>교환하기</button>
        <button onClick={()=>{setIsModalOpen(false)}}>닫기</button>
      </div>
    </div>
    )
  }

export default ExchangeModal;