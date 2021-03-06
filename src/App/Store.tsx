import React from "react";
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import './Store.scss'

type Props = {
  data: Iemeshi.ShopData[];
}

const Content = (props: Props) => {

  const navigate = useNavigate();
  const [storeList, setStoreList] = React.useState<string[]>([]);

  React.useEffect(() => {

    let stores: string[] = []

    for (let i = 0; i < props.data.length; i++) {
      const shop = props.data[i];
      if (stores.indexOf(shop['店舗名']) === -1) stores.push(shop['店舗名']);
    }

    setStoreList(stores)

  }, [props.data])


  return (
    <>
      <div className="head"></div>
      <div className="store">
        <div className="container">
          <div className="store-item">
            <label htmlFor="store-select">店舗</label>
            <Select
              onChange={(e) => {
                if (e) {
                  navigate(`/storelist?store=${e.value}`);
                }
              }}
              options={
                storeList.map(store => {
                  return {
                    value: store,
                    label: store
                  }
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
