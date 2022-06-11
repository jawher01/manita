import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getAllVol} from "../../js/actions/vol"
const vol = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllVol());
    }, [getAllVol]);
    const vols = useSelector((state) => state.volReducer.vol);
    console.log(vols)
  return (
    <div>vol</div>
  )
}

export default vol