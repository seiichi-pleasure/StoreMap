import React from "react";
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import './Category.scss'

type Props = {
  data: Iemeshi.ShopData[];
}

const Content = (props: Props) => {

  const navigate = useNavigate();

  const [categoryList, setCategoryList] = React.useState<string[]>([]);
  const [storeList, setStoreList] = React.useState<string[]>([]);

  React.useEffect(() => {

    let categories: string[] = []
    let stores: string[] = []

    for (let i = 0; i < props.data.length; i++) {
      const shop = props.data[i];

      if (categories.indexOf(shop['カテゴリ']) === -1) {

        categories.push(shop['カテゴリ'])
      }
      if (stores.indexOf(shop['スポット名']) === -1) {

        stores.push(shop['スポット名'])
      }

    }

    setCategoryList(categories)
    setStoreList(stores)

  }, [props.data])


  return (
    <>
      <div className="head"></div>
      <div className="category">
        <div className="container">
          <div className="category-item">
            <label htmlFor="category-select">O/O or FSM</label>
            <Select
              onChange={(e) => {
                if (e) {
                  navigate(`/list?category=${e.value}`);
                }
              }}
              options={
                categoryList.map(category => {
                  return {
                    value: category,
                    label: category
                  }
                })
              }
            />
          </div>

        </div>
      </div>
      <div className="store">
        <div className="container">
          <div className="store-item">
            <label htmlFor="store-select">店舗</label>
            <Select
              onChange={(e) => {
                if (e) {
                  navigate(`/list?store=${e.value}`);
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
