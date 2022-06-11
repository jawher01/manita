import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getAllChauffeure} from "../../js/actions/chauffeure"
const Chauffeure = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllChauffeure());
    }, [getAllChauffeure]);
    const Chauffeures = useSelector((state) => state.ChauffeureReducer.Chauffeure);
    console.log(Chauffeures)
  return (
    <div>Chauffeure</div>
  )
}

export default Chauffeure