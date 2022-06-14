import { connect } from "react-redux";
import { incrementarContador } from "../redux/counter/counter.action";

const CounterButtons = (props) => {
return(
    <div>
        <button onClick={() => props.dispatch(incrementarContador())}>Aumentar Contador</button>
        <button>Disminuir Contador</button>
    </div>
)
};

export default connect()(CounterButtons);