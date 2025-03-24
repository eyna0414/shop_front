
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserLayout from './components/UserLayout'
import AdminLayout from './components/AdminLayout'
import ItemForm from './components/ItemForm'
import CateManage from './components/CateManage'
import { useEffect, useState } from 'react'
import Modal from './components/Modal'
import State변경함수흐름 from './components/practice/State변경함수흐름'
import Axios흐름 from './components/practice/Axios흐름'
import ShopButton from './common_component/ShopButton'
import ShopInput from './common_component/ShopInput'
import Join from './components/Join'
import ShopSelect from './common_component/ShopSelect'
import State변경함수흐름2 from './components/practice/State변경함수흐름2'
import State변경함수흐름3 from './components/practice/State변경함수흐름3'
import Login from './components/Login'
import StorageTest from './components/practice/StorageTest'
import UploadTest from './components/practice/0317/UploadTest'

function App() {
  //로그인 정보를 저장 할 state 변수
  const [loginInfo, setLoginInfo] = useState(null);

  //Login.jsx에서 로그인을 성공하면 setLoginInfo() 함수를 이용해서 
  //로그인한 정보를 loginInfo 변수에 저장한다
  //하지만 이 상태에서 새로고침하면 loginInfo 변수에 저장된 로그인 정보가 사라진다
  //그래서 새로고침을 하더라도 sessionStorage에 저장된 데이터로 로그인 정보를
  //유지시켜주기 위해 아래의 useEffect에서 한 번 더 로그인 정보를 가져온다
  
  //로그인하면  Login컴포넌트
  //1.loginInfo 변수에 로그인 정보 저장
  //2.sessionStorage에도 로그인 정보 저장

  //새로고침하면
  //1.loginInfo변수의 데이터는 초기화된다.
  //2.sessionStorage에 저장된 데이터는 유지된다.
  //3.App.jsx를 다시 읽고 -> useEffect가 실행
  //  ->sessionSrorage에 있는 로그인 정보를 가져와서
  //    loginInfo변수에 다시 넣어준다.

  useEffect(() => {
    //sessionStorage에 있는 loginInfo 데이터 가져오기
    //loginInfo 데이터가 없다면 로그인 안한 것 -> null
    //이렇게 가져온 데이터는 json 형태이다.
    const strLoginInfo = sessionStorage.getItem('loginInfo');
    //sessinStorage에 로그인 정보가 있으면
    if(strLoginInfo != null){
    //sessionStorage에서 받은 json 데이터를 객체로 변환한다.
      //변환된 loginInfo 객체에는 로그인한 회원의 아이디, 이름, 권한 정보가 들어있다.
      setLoginInfo(JSON.parse(strLoginInfo));
    }
    }, []);


  //sessionStorage에 있는 loginInfo 데이터 받아오기
  //받은 데이터는 객체가 아닌 json 데이터다(문자열 데이터)
  //사용하려면 객체로 변환해줘야 한다.
  //JSON.parse(json데이터)
  // const data = sessionStorage.getItem('loginInfo');
  // console.log(data);

  //json -> 객체
  // const result = JSON.parse(data);
  // console.log(result)

  return (
    <div className='container'>
      {/* <StorageTest/> */}
      {/* <UploadTest /> */}

      <Routes>
        {/* 유저가 접속하는 페이지 */} 
        <Route path='/' 
              element={ <UserLayout loginInfo={loginInfo}
                                    setLoginInfo={setLoginInfo}/>}>
          {/* 상품목록 페이지 */}
          <Route path='' element={ <div>상품 목록 페이지</div> }/>

          {/* 상품 상세 페이지 */}
          <Route path='detail' element={<div>상품 상세 페이지</div>}/>

          {/* 회원가입 */}
          <Route path='join' element={ <Join/> }/>

          {/* 로그인 */}
          <Route path='login' element={ <Login setLoginInfo={setLoginInfo}/>}/>

        </Route>

        {/* 관리자가 접속하는 페이지 */}  
        <Route path='/admin' 
              element={ <AdminLayout loginInfo={loginInfo}
                                      setLoginInfo={setLoginInfo}/>}
        >
          {/* 상품등록 */}
          <Route path='reg-item' element={ <ItemForm /> }/>

          {/* 카테고리 관리 */}
          <Route path='cate-manage' element={ <CateManage /> }/>

          {/* 회원관리 */}
          <Route path='user-manage' element={<div>회원관리</div>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
