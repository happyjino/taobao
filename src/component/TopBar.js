import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const TopBar = () => {
  const navigate = useNavigate();

  const cateList = ["woman_cloth", "man_cloth", "interior", "electronics", "hobby"]
  const cateName = {
    woman_cloth: "여성의류",
    man_cloth: "남성의류",
    interior: "인테리어",
    electronics: "전자제품",
    hobby: "취미완구"
  }

  useEffect(()=>{
    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.style = "display:none; width:100%;";
    scr.async = 'true';
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute('data-ad-width','320');
    ins.setAttribute('data-ad-height','50');
    ins.setAttribute('data-ad-unit','DAN-H6lF6kPLLCXN0yti');
    document.querySelector('.adfit1').appendChild(ins);
    document.querySelector('.adfit1').appendChild(scr);
  }, [])

  return (
    <div className="top-bar">
      <div className="title" onClick={() => navigate('/')}>
        타오바오 추천 사이트
      </div>
      <div className="adfit1" />
      <header className="nav-bar">
        {cateList.map((item, index) => {
          return <div key={index} className="cate" onClick={() => navigate(`/shop?cate=${item}`)}>{cateName[item]}</div>
        })}
      </header>
      <div className="adfit2" />
    </div>
  )
}

export default TopBar