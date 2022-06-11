import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getAllHotel} from "../../js/actions/hotel"
const hotel = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllHotel());
    }, [getAllHotel]);
    const hotels = useSelector((state) => state.hotelReducer.hotel);
    console.log(hotels)
  return (
    <div>hotel</div>
  )
}

export default hotel