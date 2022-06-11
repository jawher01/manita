import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getAllBus} from "../../js/actions/bus"
const Bus = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllBus());
    }, [getAllBus]);
    const buss = useSelector((state) => state.busReducer.bus);
    console.log(buss)
  return (
    <div>Bus</div>
  )
}

export default Bus