import React from 'react'
import Sidebar  from '../layouts/Sidebar';
import { useDispatch, useSelector } from "react-redux";
import {getAllCircuit} from "../../js/actions/circuit"
const Circuit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCircuit());
  }, [getAllCircuit]);
  const circuits = useSelector((state) => state.circuitReducer.circuit);
  console.log(circuits)
  return (
<div>
      <Sidebar/>
</div>

  )
}
export  default Circuit;