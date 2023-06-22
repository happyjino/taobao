import { useLocation } from "react-router-dom";
import TopBar from "../component/TopBar"
import { useEffect, useMemo, useState } from "react";
import * as D from '../data'

const ShopList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // const [cate, setCate] = useState(queryParams.get('cate'));
  const [rank, setRank] = useState('gold')

  const cate = queryParams.get('cate')
  const cateName = {
    woman_cloth: "여성의류",
    man_cloth: "남성의류",
    interior: "인테리어",
    electronics: "전자제품",
    hobby: "취미완구"
  }
  const siteList = D[cate]

  const clickGold = () => {
    setRank('gold');
  }

  const clickSilver = () => {
    setRank('silver')
  }

  return (
    <div className="shop-list">
      <TopBar />
      {/* <div className="rank-box">
        <img src="gold.png" onClick={clickGold} className={rank === "gold" ? "clicked" : "" } />
        <img src="silver.png" onClick={clickSilver} className={rank === "silver" ? "clicked" : "" } />
      </div> */}
      <div className="site-list">
        <table border={1} className="shop-list-table">
          <tr>
            <th>등급</th>
            <th>{cateName[cate]} 주소</th>
            <th>설명</th>
            <th>QR코드</th>
          </tr>
          {siteList.map((item, index) => {

            return (
              <tr>
                <td>
                  {
                    item.rank === "gold" ? <img src="gold.png" width="20px" /> : <img src="silver.png" width="20px" />
                  }
                  {item.level}
                </td>
                <td><a href={item.url} target="_blank">{item.url}</a></td>
                <td>{item.desc}</td>
                <td className="qr-button">마우스<img className="qr-code" src={`https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${item.url}`}></img></td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default ShopList