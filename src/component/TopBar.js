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


  return (
    <div className="top-bar">
      <div className="title" onClick={() => navigate('/')}>
        타오바오 추천 사이트
      </div>
      <header className="nav-bar">
        {cateList.map((item, index) => {
          return <div key={index} className="cate" onClick={() => navigate(`/shop?cate=${item}`)}>{cateName[item]}</div>
        })}
      </header>
    </div>
  )
}

export default TopBar