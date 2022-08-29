import { ItemCard, ItemImage,ItemName, ItemPrice, ItemSectionWrapper } from "./itemSection.style";
import { BillItem } from "../../data/@types/billItem";

interface sectionProps {
    billItems: BillItem[];
}

export default function ItemSection(props: sectionProps) {
    return(
        <ItemSectionWrapper>
            { props.billItems.map(billItem => (
                <ItemCard>

                <ItemImage src={ billItem.image } alt={ billItem.name } />

                <ItemName> { billItem.name } </ItemName>

                <ItemPrice> { billItem.price } $ </ItemPrice>

                </ItemCard>
            )) }
        </ItemSectionWrapper>
    );
}
