import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Template from './pages/Template'
import StudentRegistration from './pages/StudentRegistration'
import StudentLogin from './pages/StudentLogin'
import Home from './pages/Home'
import TeacherReview from './pages/TeacherReview'
import ViewTeacherReviews from './pages/ViewTeacherReviews'
import HocStudentList from './pages/StudentList';
import AddTeacher from './pages/AddTeacher';
import TeacherList from './pages/TeacherList';
import HocReviewNewList from './pages/ReviewNewList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element ={<Template/>} >
            <Route index element ={<Home/>} />
            <Route path="/studentregistration" element ={<StudentRegistration/>} />
            <Route path='/studentlogin' element ={<StudentLogin/>} />
            <Route path='/postteacherreview' element ={<TeacherReview/>} />
            <Route path='/listteacherreviews' element ={<ViewTeacherReviews/>} />
            <Route path='/studentlist' element={<HocStudentList/>}></Route>
            <Route path='/addteacher' element={<AddTeacher/>}></Route>
            <Route path='/teacherlist' element={<TeacherList/>}></Route>
            <Route path='/newreviews' element={<HocReviewNewList/>}></Route>



          </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
