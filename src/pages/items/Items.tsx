import ItemSection from "../../components/item-section/ItemSection";

export function Items() {
    return(
        <ItemSection 
            billItems={ [
                {
                    id:0,
                    name:"item 0",
                    image:"/items/item0.png",
                    price:100,
                },
                {
                    id:1,
                    name:"item 1",
                    image:"/items/item1.png",
                    price:50,
                },
                {
                    id:2,
                    name:"item 2",
                    image:"/items/item2.png",
                    price:25,
                }
            ] }/>
    );
}
