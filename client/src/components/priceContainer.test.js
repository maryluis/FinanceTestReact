import React from "react";
import { render, screen , fireEvent} from '@testing-library/react';
import { PriceContainer } from './index';
import { actionConnection, dataReducer } from "../redux";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { dataConnect } from "../saga";

const dataItems = [{
    ticker:"GOOGL",
    exchange:"NASDAQ",
    price:237.08,
    change:154.38,
    change_percent:0.10,
    dividend:0.46,
    yield:1.18,
    last_trade_time:"2021-04-30T11:53:21.000Z"}]

const names = {GOOGL: "Google",}


const renderWithRedux = (
    component, {initialState = dataItems, store = createStore(dataReducer, initialState) } = {}    
) => {
    return {
        ...render(<Provider store = {store}>{component}</Provider>), store
    }
}

describe("priceContainer", () => {
    it("render priceContainer", () => {
        render(<PriceContainer getData={() => [1, 2, 3]} data = {dataItems} names = {names}/>);
        screen.debug();
        expect(screen.queryByRole("complementary"));
        
    })

});
describe("priceContainer with redux",  () => {
    it("checkState", () => {
    renderWithRedux(<PriceContainer getData = {() => actionConnection()}/>);
    fireEvent.change(screen.getByRole("complementary"), {
        target: {data: [{}]}
      });
    })
})