import { useRef, useState } from "react";
import CommentEditor from "./Commenteditor";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import './DetailQA.css'
import { tab } from "@testing-library/user-event/dist/tab";

const DetailQA1 = ({location,tableInfo,setTableInfo}) => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newCommentList = data.filter((it) => it.id !== targetId);
    setData(newCommentList);  
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };
  const params = location.state;
  const tableRemove =(targetId)=>{
    const newTable = tableInfo.filter((it)=> it.num !== targetId);
    setTableInfo(newTable)
    console.log(newTable);
  };//왜 num 값이 다 같은지 모르겠음.
  return (
    <div className="detail-qa">
      <div className='head-list'>
        <div id="item1">{params.num}</div>
        <div id="item2">{params.title}</div>
        <div id="item3">{params.date}</div>
        <div id="item4">{params.user}</div>
      </div>
      <div className='text-input'>
        {params.content}
      </div>
      <CommentList onEdit={onEdit} onRemove={onRemove} CommentList={data} />
      <CommentEditor onCreate={onCreate} />
      <div className='btn-list'>
        <button>수정</button>
        <button onClick={tableRemove} >삭제</button>
        <Link to="/mainqa"><button>목록</button></Link>
      </div>
    </div>
  );
};
export default DetailQA1;
