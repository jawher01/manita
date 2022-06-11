import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getAllGouvernerant} from "../../js/actions/gouvernerant"
const gouvernerant = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllGouvernerant());
    }, [getAllGouvernerant]);
    const gouvernerants = useSelector((state) => state.gouvernerantReducer.gouvernerant);
    console.log(gouvernerants)
  return (
    <div>gouvernerant</div>
  )
}

export default gouvernerant