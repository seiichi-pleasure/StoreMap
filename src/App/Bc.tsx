import React from "react";
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import './Store.scss'

type Props = {
  data: Iemeshi.ShopData[];
}

const Content = (props: Props) => {

  const navigate = useNavigate();
  const [bcList, setBcList] = React.useState<string[]>([]);

  React.useEffect(() => {

    let bcs: string[] = []

    for (let i = 0; i < props.data.length; i++) {
      const shop = props.data[i];
      if (bcs.indexOf(shop['BCOM']) === -1) bcs.push(shop['BCOM']);
    }

    setBcList(bcs)

  }, [props.data])


  return (
    <>
      <div className="head"></div>
      <div className="store">
        <div className="container">
          <div className="store-item">
            <label htmlFor="store-select">BCOM</label>
            <Select
              onChange={(e) => {
                if (e) {
                  navigate(`/bclist?bc=${e.value}`);
                }
              }}
              options={
                bcList.map(store => {
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
