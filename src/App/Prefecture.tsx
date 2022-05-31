import React from "react";
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import './Store.scss'

type Props = {
  data: Iemeshi.ShopData[];
}

const Content = (props: Props) => {

  const navigate = useNavigate();
  const [prefectureList, setPrefectureList] = React.useState<string[]>([]);

  React.useEffect(() => {

    let prefectures: string[] = []

    for (let i = 0; i < props.data.length; i++) {
      const shop = props.data[i];
      if (prefectures.indexOf(shop['都道府県']) === -1) prefectures.push(shop['都道府県']);
    }

    setPrefectureList(prefectures)

  }, [props.data])


  return (
    <>
      <div className="head"></div>
      <div className="store">
        <div className="container">
          <div className="store-item">
            <label htmlFor="store-select">都道府県</label>
            <Select
              onChange={(e) => {
                if (e) {
                  navigate(`/prefecturelist?prefecture=${e.value}`);
                }
              }}
              options={
                prefectureList.map(store => {
                  return {
                    value: prefecture,
                    label: prefecture
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
