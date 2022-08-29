import styled from "styled-components";

export const ItemCard = styled('div')`
    justify-content: space-evenly;
    background-color: #e6e6e6;
    align-items: center;
    min-height: 12rem;
    flex-wrap: wrap;
    display: flex;
    margin: 1rem;
`;

export const ItemImage = styled('img')`
    border-radius: 50%;
    height: 12rem;
    margin: 1rem;
`;

export const ItemName = styled('div')`
    background-color: #ffffff;
    border-radius: 5px 50px;
    text-align: center;
    line-height: 8rem;
    color: #000000;
    font-size: 4rem;
    margin: 1rem;
    height: 8rem;
    width: 66%;
`;

export const ItemPrice = styled('div')`
    background-color: #ffffff;
    text-align: center;
    border-radius: 50%;
    line-height: 8rem;
    color: #000000;
    font-size: 2rem;
    height: 8rem;
    margin: 1rem;
    width: 8rem;
`;

export const ItemSectionWrapper = styled('div')`
    flex-direction: column;
    display: flex;
`;
