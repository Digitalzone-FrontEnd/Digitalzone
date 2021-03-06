import React, { useEffect, useRef, useState } from "react";
import Footer from "./common/Footer";
import { Route } from "react-router-dom";
import Faq from "./faq/Faq";
import Guide from "./guide/Guide";
import Login from "./login/Login";
import Panel from "./login/panel/Panel";
import FindId from "./login/find/FindId";
import FindPw from "./login/find/FindPw";
import Terms from "./login/signup/Terms";
import Complete from "./login/signup/Complete";
import InfoInput from "./login/signup/InfoInput";
import PointView from "./point/PointView";
import PointBoard from "./point/PointBoard";
import ApproveBoard from "./survey/approve/ApproveBoard";
import ApproveView from "./survey/approve/ApproveView";
import AccountChange from "./account/AccountChange";
import AccountSetup from "./account/AccountSetup";
import AccountManage from "./account/AccountManage";
import MyPage from "./account/MyPage";
import ManagePoint from "./managepoint/ManagePoint";
import PostView from "./panelsystem/PostView";
import PostList from "./panelsystem/PostList";
import Survey from "./survey/Survey";
import SurveyDetail from "./survey/SurveyDetail";
import SurveyRegist from "./survey/SurveyRegist";
import SurveyModify from "./survey/SurveyModify";
import Header from "./common/Header";
import Main from "./main/Main";
import surveyData from "../data/SurveyData";
import surveyApproveData from "../data/SurveyApproveData";
import pointData from "../data/pointData";
import panelData from "../data/panelData";
import userData from "../data/userData";
import qaData from "../data/qaData";
import Home from "./home/Home.js";
import MainQA from "./q&a/mainq&a/MainQA";
import PublishQA from "./q&a/publishq&a/PublishQA";
import DetailQA1 from "./q&a/detailq&a/DetailQA1";

const Root = () => {
  const [selectPointItem, setSelectPointItem] = useState({});
  const [isUserLogin, setIsUserLogin] = useState(false);
  useEffect(() => {
    let accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || null;
    if (accessToken) {
      setIsUserLogin(true);
    } else {
      setIsUserLogin(false);
    }
  }, [isUserLogin]);
  const [userList, setUserList] = useState([
    {
      id: 0,
      userco: "(???) A",
      accountid: "juri42",
      accountpw: 123456789,
      mail: "juri42@gmail.com",
      username: "?????????",
      usercall1: "010",
      usercall2: "1234",
      usercall3: "5678",
    },
    {
      id: 1,
      userco: "(???) B",
      accountid: "perfume22",
      accountpw: 987654321,
      mail: "perfume22@naver.com",
      username: "?????????",
      usercall1: "010",
      usercall2: "9876",
      usercall3: "5432",
    },
    {
      id: 2,
      userco: "(???) C",
      accountid: "asd2",
      accountpw: 246246446,
      mail: "egseg5@naver.com",
      username: "?????????",
      usercall1: "010",
      usercall2: "3958",
      usercall3: "3643",
    },
    {
      id: 3,
      userco: "(???) D",
      accountid: "sav",
      accountpw: 34646477,
      mail: "eljif074@naver.com",
      username: "?????????",
      usercall1: "010",
      usercall2: "4446",
      usercall3: "2978",
    },
    {
      id: 4,
      userco: "(???) E",
      accountid: "z412",
      accountpw: 6768971,
      mail: "alie97@naver.com",
      username: "?????????",
      usercall1: "010",
      usercall2: "1037",
      usercall3: "3094",
    },
    {
      id: 5,
      userco: "(???) F",
      accountid: "dfh5",
      accountpw: 79634634,
      mail: "wjgid7444@naver.com",
      username: "?????????",
      usercall1: "010",
      usercall2: "4686",
      usercall3: "2677",
    },
  ]);
  // userList
  const [pointItems, setPointItems] = useState(pointData);
  const [surveyApproveItems, setSurveyApproveItems] =
    useState(surveyApproveData);

  const handleCreate = (
    accountid,
    accountpw,
    mail,
    username,
    usercall1,
    usercall2,
    usercall3
  ) => {
    const userArray = [...userList];
    userArray.push({
      id: userList[userList.length - 1].id + 1,
      userco: "(???) o",
      accountid: `${accountid}`,
      accountpw: `${accountpw}`,
      mail: `${mail}`,
      username: `${username}`,
      usercall1: `${usercall1}`,
      usercall2: `${usercall2}`,
      usercall3: `${usercall3}`,
      userinfo: `(???) o ${username}`,
    });
    setUserList(userArray);
  };
  // userList??? push ????????? ??????

  const [panelPosts, setPanelPosts] = useState([
    {
      number: "16",
      name: "(???)????????????",
      phone: "010-9983-3321",
      email: "asd@qwe.com",
      date: "2022-02-04",
      statedate: "2022-02-04",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "???????????? ?????????.",
    },
    {
      number: "15",
      name: "(???)????????????",

      phone: "010-2232-4544",
      email: "yog@gmail.com",
      date: "2022-02-04",
      statedate: "2022-02-04",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "??????????????? ~ :)",
    },
    {
      number: "14",
      name: "(???)????????????",
      phone: "010-2232-4544",
      email: "oeoe@gmail.com",
      date: "2022-01-22",
      statedate: "2022-01-22",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "Sincheong hapnida",
    },
    {
      number: "13",
      name: "(???)????????????",
      phone: "010-9930-2993",
      email: "wooBin21@gmail.com",
      date: "2022-01-15",
      statedate: "2022-01-15",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "??????13",
    },
    {
      number: "12",
      name: "(???)????????????",
      phone: "010-9930-2993",
      email: "wooBin21@gmail.com",
      date: "2021-12-28",
      statedate: "2021-12-28",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "??????12",
    },
    {
      number: "11",
      name: "(???)????????????",
      phone: "010-2993-2883",
      email: "asda@sadas.com",
      date: "2021-11-28",
      statedate: "2021-11-28",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "??????????????????",
    },
    {
      number: "10",
      name: "(???)????????????",
      phone: "010-2993-2883",
      email: "asda@sadas.com",
      date: "2021-10-28",
      statedate: "2021-10-28",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "??????! ",
    },
    {
      number: "9",
      name: "(???)????????????",
      phone: "010-3884-9920",
      email: "141241@nslekf.com",
      date: "2021-09-04",
      statedate: "2021-09-05",
      state: "??????",
      statemanager: "????????????",
      record: [],
      panelContent: "?????????????????????",
    },
    {
      number: "8",
      name: "(???)????????????",
      phone: "010-9803-0408",
      email: "silstar48@ddd.dd",
      date: "2021-08-04",
      statedate: "2021-08-05",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "??????????????????",
    },
    {
      number: "7",
      name: "(???)????????????",
      phone: "010-9803-0408",
      email: "silstar48@ddd.dd",
      date: "2021-07-10",
      statedate: "2021-07-11",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "??????",
    },
    {
      number: "6",
      name: "(???)????????????",
      phone: "010-2212-3432",
      email: "mjh9461@hanmail.com",
      date: "2021-07-04",
      statedate: "2021-07-05",
      state: "??????",
      statemanager: "????????????",
      record: [],
      panelContent: "?????? ??????",
    },
    {
      number: "5",
      name: "(???)????????????",
      phone: "010-2212-3432",
      email: "mjh9461@hanmail.com",
      date: "2021-06-04",
      statedate: "2021-06-05",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "??????5",
    },
    {
      number: "4",
      name: "(???)??????????????????",
      phone: "010-6958-0493",
      email: "JC01@daum.net",
      date: "2021-05-10",
      statedate: "2021-05-10",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "?????? ?????? ?????????.",
    },
    {
      number: "3",
      name: "(???)??????????????????",
      phone: "010-6958-0493",
      email: "JC01@daum.net",
      date: "2021-05-04",
      statedate: "2021-05-05",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "?????????????????????!",
    },
    {
      number: "2",
      name: "???????????????",
      phone: "010-6958-0493",
      email: "JC01@daum.net",
      date: "2021-04-05",
      statedate: "2021-04-05",
      state: "??????",
      statemanager: "????????????",
      record: [],
      panelContent: "?????? ????????????",
    },
    {
      number: "1",
      name: "???????????????",
      phone: "010-6958-0493",
      email: "JC01@daum.net",
      date: "2021-03-04",
      statedate: "2021-03-05",
      state: "??????",
      statemanager: "?????????",
      record: [],
      panelContent: "?????? ???????????????",
    },
  ]);
  const [point, setPoint] = useState(0); //?????? ?????? ????????? ?????? ????????? ????????? 0?????? ????????????.
  const [list, setList] = useState([]);
  /* ???????????? ?????? */

  const addList = (totalPoint, point) => {
    const pointList = [...list];
    pointList.unshift({
      id: 2,
      title: "???????????????",
      state: point + "point",
      point: totalPoint,
    });
    setList(pointList);
  };
  /* ???????????? ????????? ?????? ?????? */

  /* ??????????????? ?????? ????????? */
  let [tableInfo, setTableInfo] = useState([
    {
      id: 11,
      num: "11",
      title: "Q&A ?????????",
      date: "2021.10.15",
      user: "?????????",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 10,
      num: "10",
      title: "Q&A ?????????",
      date: "2021.10.10",
      user: "?????????",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 9,
      num: "9",
      title: "Q&A ?????????",
      date: "2021.10.03",
      user: "?????????",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 8,
      num: "8",
      title: "Q&A ?????????",
      date: "2021.09.30",
      user: "?????????",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 7,
      num: "7",
      title: "Q&A ?????????",
      date: "2021.09.28",
      user: "?????????",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  ",
    },
    {
      id: 6,
      num: "6",
      title: "Q&A ?????????",
      date: "2021.09.17",
      user: "?????????",
      content: "Many desktop publishing packages",
    },
    {
      id: 5,
      num: "5",
      title: "Q&A ?????????",
      date: "2021.09.08",
      user: "?????????",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it",
    },
    {
      id: 4,
      num: "4",
      title: "Q&A ?????????",
      date: "2021.08.28",
      user: "?????????",
      content: "Many desktop publishing packages",
    },
    {
      id: 3,
      num: "3",
      title: "Q&A ?????????",
      date: "2021.08.13",
      user: "?????????",
      content: "Many desktop publishing packages",
    },
    {
      id: 2,
      num: "2",
      title: "Q&A ?????????",
      date: "2021.07.28",
      user: "?????????",
      content: "Many desktop publishing packages",
    },
    {
      id: 1,
      num: "1",
      title: "Q&A ?????????",
      date: "2021.07.10",
      user: "?????????",
      content: "Many desktop publishing packages",
    },
  ]);
  /* Q&A ????????? */

  const [posts, setPosts] = useState(surveyData);
  // ?????? ????????? ?????????

  const [currentPage, setCurrentPage] = useState(1);
  //?????? ????????? ??????
  const postsPerPage = 10;
  // ??? ????????? ??? ??? ?????? ?????? ??????
  const [user, setUser] = useState({
    id: "",
    login: false,
    grade: 0,
  });
  // ????????? ????????????
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast); // 0 ~ 10 |  10 ~ 20
    return currentPosts;
  }
  /* ?????? ????????? */

  const surveySerachFnc = (ref) => {
    return new Promise(function (resolve, reject) {
      const value = ref.current.value;
      const searchPosts = [...posts];
      const result = searchPosts.filter(
        (post) => post.surveyName.indexOf(value) !== -1
      );
      if (result.length <= 0) {
        alert("???????????? ???????????? ?????? ?????? ????????????.");
        return false;
      }
      setPosts(result);
      setCurrentPage(1);
    });
  };
  /* ???????????? ?????? */

  return (
    <div>
      <Header
        user={user}
        point={point}
        setUser={setUser}
        isUserLogin={isUserLogin}
        setIsUserLogin={setIsUserLogin}
      />
      <Route exact path="/" component={Main} />
      <Route
        exact
        path="/mainqa"
        render={(props) => (
          <MainQA
            tableInfo={tableInfo}
            setTableInfo={setTableInfo}
            {...props}
            user={user}
          />
        )}
      />
      <Route path="/faq" render={() => <Faq user={user} />} />
      <Route path="/guide" render={() => <Guide user={user} />} />
      <Route
        path="/login"
        render={() => (
          <Login setUser={setUser} setIsUserLogin={setIsUserLogin} />
        )}
      />
      <Route path="/terms" component={Terms} />
      <Route path="/findId" component={FindId} />
      <Route path="/findPw" component={FindPw} />
      <Route
        exact
        path="/panel"
        render={() => (
          <Panel panelPosts={panelPosts} setPanelPosts={setPanelPosts} />
        )}
      />
      <Route path="/infoinput" component={InfoInput} />
      <Route path="/complete" component={Complete} />
      <Route
        exact
        path="/point/board"
        render={() => (
          <PointBoard
            pointItems={pointItems}
            setSelectPointItem={setSelectPointItem}
            selectPointItem={selectPointItem}
            user={user}
            setPointItems={setPointItems}
          />
        )}
      ></Route>
      <Route
        path="/point/view/:id"
        render={() => (
          <PointView
            pointItems={pointItems}
            setPointItems={setPointItems}
            user={user}
            addList={addList}
            point={point}
            setPoint={setPoint}
          />
        )}
      />
      <Route
        path="/approve/board"
        render={() => (
          <ApproveBoard
            surveyApproveItems={posts}
            setSurveyApproveItems={setPosts}
            user={user}
          />
        )}
      ></Route>
      <Route
        exact
        path="/approve/view/:id"
        render={() => (
          <ApproveView
            surveyApproveItems={posts}
            setPosts={setPosts}
            user={user}
          />
        )}
      ></Route>

      <Route
        exact
        path="/panel/board"
        render={(props) => (
          <PostList
            posts={panelPosts}
            setPosts={setPanelPosts}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            user={user}
            {...props}
          />
        )}
      />
      <Route
        exact
        path="/panel/view/:no"
        render={(props) => (
          <PostView
            posts={panelPosts}
            setPosts={setPanelPosts}
            user={user}
            {...props}
          />
        )}
      />

      <Route
        path="/managepoint"
        render={() => (
          <ManagePoint
            point={point}
            setPoint={setPoint}
            list={list}
            setList={setList}
            user={user}
            pointItems={pointItems}
            setPointItems={setPointItems}
            addList={addList}
          />
        )}
      />
      <Route
        exact={true}
        path="/survey"
        render={(props) => (
          <Survey
            {...props}
            totalIndexPosts={
              posts
            } /* ?????? ????????? (????????? ???????????? ??????????????? ?????? ?????????????????? ?????? X) */
            posts={currentPosts(posts)} /* 10?????? ?????? ????????? */
            setPosts={setPosts}
            postsPerPage={postsPerPage} /* ??? ????????? ??? ??? ?????? ?????? ?????? */
            totalPosts={posts.length} /* ????????? ??? */
            paginate={setCurrentPage} /* ?????? ????????? ??????  */
            surveySerachFnc={surveySerachFnc}
            currentPage={currentPage}
            user={user}
            AllDataPosts={posts}
          />
        )}
      />
      <Route
        path="/survey/surveydetail/:num"
        component={(props) => (
          <SurveyDetail setPosts={setPosts} {...props} user={user} />
        )}
      />
      <Route
        path="/survey/surveymodify"
        component={(props) => (
          <SurveyModify
            posts={posts}
            setPosts={setPosts}
            {...props}
            user={user}
          />
        )}
      />
      <Route path="/surveyregist" component={SurveyRegist} />
      <Route path="/home" render={() => <Home user={user} posts={posts} />} />
      <Route
        path="/mainqa/publish"
        render={(props) => (
          <PublishQA
            tableInfo={tableInfo}
            setTableInfo={setTableInfo}
            {...props}
          />
        )}
      />
      <Route
        path={`/mainqa/detailqa/:num`}
        render={(props) => (
          <DetailQA1
            tableInfo={tableInfo}
            setTableInfo={setTableInfo}
            user={user}
            {...props}
          />
        )}
      />
      <Route
        path="/accountchange"
        render={() => <AccountChange user={user} />}
      />
      <Route
        path="/accountsetup"
        render={() => (
          <AccountSetup
            handleCreate={handleCreate}
            setUserList={setUserList}
            user={user}
          />
        )}
      />
      <Route
        path="/accountmanage"
        render={(props) => (
          <AccountManage
            userList={userList}
            handleCreate={handleCreate}
            setUserList={setUserList}
            user={user}
          />
        )}
      />
      <Route path="/mypage" render={(props) => <MyPage user={user} />} />
      <Footer isUserLogin={isUserLogin} />
    </div>
  );
};

export default Root;
