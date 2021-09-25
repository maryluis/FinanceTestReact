import { useEffect } from "react";
import { actionConnection } from "../redux";
import { bindActionCreators } from 'redux';
import { Item } from ".";
import { connect } from 'react-redux';


const PriceContainer = ({getData, names, data = []}) => {
    useEffect(() => getData(), [getData]);

    return(
        <div className="flex container" role="complementary">
            {data.map((el) =>
            <Item role="item" key={el.ticker} title={names[el.ticker]} price={el.price} changed={el.change} percent={el.change_percent}/>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    data: state && state.data,
    names: state&& state.names
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getData: actionConnection,
}, dispatch);

const CPriceContainer = connect(mapStateToProps, mapDispatchToProps)(PriceContainer);

export {PriceContainer, CPriceContainer};