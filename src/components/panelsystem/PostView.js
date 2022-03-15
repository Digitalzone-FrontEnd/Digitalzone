import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./PostView.css";
import moment from "moment";

const PostView = ({posts,setPosts}) => {
  const params = useParams(); //파라미터로 받기 위한 함수
  let no = params.no;
  const postItem = posts.find((item) => {
    return item.number === no;
  });
  const [prevState, setPrevState] = useState("");
  const [selectValue, setSelectValue] = useState(postItem.state);

  let date = moment().format("YYYY-MM-DD HH:mm:ss");
  /* 날짜 */

  let recordTxt = `· ${date} ${
    postItem.statemanager
  } 님이 상태를 ${prevState} 에서 ${selectValue} ${
    selectValue === "처리중" ? "으로" : "로"
  } 변경하였습니다.`;

  const selectChange = (e) => {
    if ( selectValue === postItem.state) {
      alert('같은 상태입니다')
      return
    } else {
      setPrevState(selectValue);
      setSelectValue(e.target.value);
    }
    
  };
  //select메뉴 변경시 벨류값

  const saveBtn = () => {
    setPosts(
      posts.map((item) => {
        if (item.number === no) {
          item.record.unshift(recordTxt);

          /* -추가 부분 - */
          item.state = selectValue;
          /* -추가 부분 - */
        }
        return item;
      })
    );
  };

  const data = {
    번호: "번호",
    업체명: "업체명",
    연락처: "연락처",
    이메일: "이메일",
    신청일: "신청일",
    상태변경일: "상태변경일",
    상태: "상태",
    상태변경자: "담당자",
    신청내용: "신청/문의내용",
  };
  const options = [
    { value: "접수", name: "접수" },
    { value: "처리중", name: "처리중" },
    { value: "완료", name: "완료" },
  ];

  return (
    <div className="inner_box">
      <div className="postview-wrap">
        <div className="postview-content">
          <table className="postview-table">
            <thead className="postview-thead">
              <tr>
                <td>{data.업체명}</td>
                <td>{data.상태변경자}</td>
                <td>{data.연락처}</td>
                <td>{data.이메일}</td>
                <td>{data.신청내용}</td>
              </tr>
            </thead>
            <tbody className="postview-tbody">
              <tr>
                <td>주식회사({postItem.name}</td>
                <td>{postItem.statemanager}</td>
                <td>{postItem.phonenumber}</td>
                <td>{postItem.email}</td>
                <td>패널인증시스템 신청합니다.</td>
              </tr>
            </tbody>
          </table>
          {/* 테이블 끝 */}
        </div>
        <div className="postview-btn-box">
          <p>상태</p>
          <div className="select-wrap">
            <select
              value={selectValue}
              name="접수"
              id="postview-select"
              onChange={selectChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <button className="postview-btn save-btn" onClick={saveBtn}>
            저장
          </button>
          <Link to="/panel/board">
            <button className="postview-btn back-btn">목록</button>
          </Link>
        </div>
        <div className="postview-loglist">
          <p>[기록]</p>
          <ul className="postview-log">
            {postItem.record.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostView;
