import React from "react";
import { Link } from "react-router-dom";
import './Tabbar.scss'

import { FaList, FaHome, FaSearch } from "react-icons/fa"

const Content = () => {
  return (
    <div className="tabbar">
      <ul>
        <li><Link to="/"><div className="icon"><FaHome /></div><div className="text">ホーム</div></Link></li>
        <li><Link to="/category"><div className="icon"><FaSearch /></div><div className="text">O/O</div></Link></li>
        <li><Link to="/store"><div className="icon"><FaSearch /></div><div className="text">店舗</div></Link></li>
        <li><Link to="/bc"><div className="icon"><FaSearch /></div><div className="text">BC</div></Link></li>
        <li><Link to="/prefecture"><div className="icon"><FaSearch /></div><div className="text">都道府県</div></Link></li>
        <li><Link to="/list"><div className="icon"><FaList /></div><div className="text">一覧</div></Link></li>
      </ul>
    </div>
  );
};

export default Content;
