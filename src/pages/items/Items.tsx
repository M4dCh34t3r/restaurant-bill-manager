import ItemSection from "../../components/item-section/ItemSection";
import { BillItem } from "../../data/@types/billItem";
import { useEffect, useState } from 'react';

export function Items() {
    const [billItems, setBillItems] = useState(Array<BillItem>);
    const url = 'http://localhost:5000/bill-items';

    useEffect(() =>  {
      const fetchData = async () => {
        try {
          let response = await fetch(url);
  
          if (response.status === 200) {
            console.log("Data successfully fetched from ", url);
            let data = await response.json();
            setBillItems(data);
            return;
          }
        } catch(e: any) {
          console.log(e);
        }
      }
      fetchData();
    });

    return(
        <ItemSection billItems={ billItems }/>
    );
}
