import { useSelector } from 'react-redux';
import {updateMember} from './memberSlice';

export const useTotalMember = () =>{
    const totalMember = useSelector((state) => state.members.members);
    return totalMember;
}