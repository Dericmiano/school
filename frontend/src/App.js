import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SliderScreen from "./screens/SliderScreen";
import SchoolListScreen from "./screens/SchoolListScreen";
import SchoolScreen from "./screens/SchoolScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import StudentsDetailsRegister from "./screens/StudentsDetailsRegister";
import StudentsDetailScreen from "./screens/StudentsDetailScreen";
import ProfileScreen from "./screens/ProfileScreen";
import StudentEntryScoresScreen from "./screens/StudentEntryScoresScreen";
import StudentScoresScreen from "./screens/StudentScoresScreen";
import SuccessScreen from "./screens/SuccessScreen";
import SchoolChoosingScreen from "./screens/SchoolChoosingScreen";
import SchoolChoiceDetails from "./screens/SchoolChoiceDetails";
import SelectScreen from "./screens/SelectScreen";
import FinishingScreen from "./screens/FinishingScreen";
import StudentPriSchDetailsEntryScreen from "./screens/StudentPriSchDetailsEntryScreen";
import StudentPriSchScoresEntryScreen from "./screens/StudentPriSchScoresEntryScreen";
import SubmitScreen from "./screens/SubmitScreen";
import 'animate.css';
import ApplicationScreen from "./screens/ApplicationSreen";
import UserListSCreen from "./screens/UserListSCreen";
import UserEditScreen from "./screens/UserEditScreen";
import AllSchoolsListScreen from "./screens/AllSchoolsListScreen";
import SchoolEditScreen from "./screens/SchoolEditScreen";
import ApplicationListScreen from "./screens/ApplicationListScreen";

function App() {
  return (
    <Router>
        <Header/>
       <main className='py-0'>

           <Container>
               <Route path='/'  component={SliderScreen} exact/>
               <Route path='/school' component={SchoolListScreen}/>
               <Route path='/schoolDetails/:id/' component={SchoolScreen} exact />
               <Route path='/login' component={LoginScreen}/>
               <Route path='/profile' component={ProfileScreen}/>
               <Route path='/register' component={RegisterScreen}/>
               <Route path='/student' component={StudentsDetailsRegister}/>
               <Route path='/studentDetails' component={StudentsDetailScreen}/>
               <Route path='/studentEntryScores' component={StudentEntryScoresScreen}/>
               <Route path='/studentScores' component={StudentScoresScreen}/>
               <Route path='/success' component={SuccessScreen}/>
               <Route path='/schoolChoose' component={SchoolChoosingScreen}/>
               <Route path='/schoolChooseDetails/:id/' component={SchoolChoiceDetails}/>
               <Route path='/select/:id?' component={SelectScreen}/>
               <Route path='/finishing' component={FinishingScreen}/>
               <Route path='/studentEntryPriSchDetails' component={StudentPriSchDetailsEntryScreen}/>
               <Route path='/studentEntryPriSchScores' component={StudentPriSchScoresEntryScreen}/>
               <Route path='/submit' component={SubmitScreen}/>
               <Route path='/application/:id' component={ApplicationScreen}/>
               <Route path='/admin/userlist' component={UserListSCreen}/>
              <Route path='/admin/user/:id/edit' component={UserEditScreen} />
               <Route path='/admin/schoollist' component={AllSchoolsListScreen}/>
               <Route path='/admin/school/:id/edit' component={SchoolEditScreen} />
               <Route path='/admin/applicationlist' component={ApplicationListScreen} />













           </Container>

       </main>
        <Footer/>
    </Router>
  );
}

export default App;
