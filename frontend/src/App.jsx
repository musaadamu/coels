import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';



import PrivateRoute from './components/PrivateRoute';
import CollegeNameBanner from './components/CollegeNameBanner'
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the components for individual pages
import Provost from './pages/Provost/Provost';
import Registrar from './pages/Registrar/Registrar';
import Establishment from './pages/Establishment/Establishment';
// import EstablishmentOffice from './pages/ExtablishmentOffice/ExtablishmentOffice';
import ExamsRecords from './pages/ExamsRecords/ExamsRecords';
import AdmissionOffice from './pages/AdmissionOffice/AdmissionOffice';
import StudentAffairs from './pages/StudentAffairs/StudentAffairs';
import DeanSchoolOfScience from './pages/DeanSchoolOfScience/DeanSchoolOfScience';
import DeanSchoolOfLanguages from './pages/DeanSchoolOfLanguages/DeanSchoolOfLanguages';
import DeanSchoolOfSocialScience from './pages/DeanSchoolOfSocialScience/DeanSchoolOfSocialScience';
import DeanSchoolOfLaw from './pages/DeanSchoolOfLaw/DeanSchoolOfLaw';
import DepartmentComputerScience from './pages/DepartmentComputerScience/DepartmentComputerScience';
import DepartmentMathematics from './pages/DepartmentMathematics/DepartmentMathematics';
import DepartmentEnglish from './pages/DepartmentEnglish/DepartmentEnglish';
import DepartmentHausa from './pages/DepartmentHausa/DepartmentHausa';
import Librarian from './pages/Librarian/Librarian';
import Tetfund from './pages/Tetfund/Tetfund';
import Nce from './pages/NCE/Nce';
import Diploma from './pages/Diploma/Diploma';

// import Provost from './pages/Provost/Provost';
import Academics from './pages/Academics/Academics';
import OpenRegistry from './pages/OpenRegistry/OpenRegistry';
import Footer from './components/Footer';
import Registration from './pages/Registration/Registration';
import Payment from './pages/Payments/Payment';
import Results from './pages/Results/Results';
import Accommodation from './pages/Accommodation/Accommodation';
import SchoolOfEducation from './pages/SchoolOfEducation/SchoolOfEducation';
import SchoolOfECCE from './pages/SchoolOfECCE/SchoolOfECCE';
import SchoolOASMS from './pages/SchoolOASMS/SchoolOASMS';
import SchoolOfVTE from './pages/SchoolOfVTE/SchoolOfVTE';
import CentreFSMS from './pages/CentreFSMS/CentreFSMS';
import GeneralStudies from './pages/GeneralStudies/GeneralStudies';
import IntegratedScience from './pages/IntegratedScience/IntegratedScience';
import Arabic from './pages/Arabic/Arabic';
import IslamicStudies from './pages/IslamicStudies/IslamicStudies';
import Economics from './pages/Economics/Economics';
import CivilLaw from './pages/CivilLaw/CivilLaw';
import ShariaCivilLaw from './pages/ShariaCivilLaw/ShariaCivilLaw'
import HomeManagement from './pages/HomeManagement/HomeManagement';
import DepartmentEducation from './pages/DepartmentEducation/DepartmentEducation';
import PrimaryEducation from './pages/PrimaryEducation/PrimaryEducation';
import BusinessEducation from './pages/BusinessEducation/BusinessEducation';
import PublicAdmin from './pages/PublicAdmin/PublicAdmin';
import AccountAudits from './pages/AccountAudits/AccountAudits';
import QuranicScience from './pages/QuranicScience/QuranicScience';
import CommunitySocialDevelopment from './pages/CommunitySocialDevelopment/CommunitySocialDevelopment';
import PeaceConflictResolution from './pages/PeaceConflictResolution/PeaceConflictResolution';
import LibraryInformationScience from './pages/LibraryInformationScience/LibraryInformationScience';
import SocialStudies from './pages/SocialStudies/SocialStudies'
import Staff from './pages/Staff/Staff';
import Students from './pages/Students/Students';
import SchoolOfGS from './pages/SchoolOfGS/SchoolOfGS'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <CollegeNameBanner />
        <ToastContainer />
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={< RegisterScreen/>} />
            <Route path="" element={<PrivateRoute />}>
              <Route path="/profile" element={<ProfileScreen />} />
            </Route>

            {/* Routes for Individual Links */}
            <Route path="/provost" element={<Provost />} />
            <Route path="/Tetfund" element={<Tetfund />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/librarian" element={<Librarian />} />
            <Route path="/establishment-office" element={<Establishment />} />
            <Route path="/exams-records" element={<ExamsRecords />} />
            <Route path="/admission-office" element={<AdmissionOffice />} />
            <Route path="/open-registry" element={<OpenRegistry />} />
            
            <Route path="/student-affairs" element={<StudentAffairs />} />
            <Route path="/diploma" element={<Diploma />} />
            <Route path="/nce" element={<Nce />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/results" element={<Results />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/nce" element={<Nce />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/students" element={<Students />} />
          
               
            
            


            {/* Routes for Schools */}
            <Route path="/dean-school-of-science" element={<DeanSchoolOfScience />} />
            <Route path="/dean-school-of-languages" element={<DeanSchoolOfLanguages />} />
            <Route path="/dean-school-of-social-science" element={<DeanSchoolOfSocialScience />} />
            <Route path="/dean-school-of-law" element={<DeanSchoolOfLaw />} />

            <Route path="/education" element={<SchoolOfEducation />} />
            <Route path="/early-child" element={<SchoolOfECCE />} />
            <Route path="/school-of-arts" element={<SchoolOASMS />} />
            <Route path="/school-of-vocational" element={<SchoolOfVTE />} />
            <Route path="/centre-for-social-and-management-science" element={<CentreFSMS />} />
            <Route path="/general-studies" element={< SchoolOfGS/>} />
            

            
    



            {/* Routes for Departments */}
            <Route path="/department-computer-science" element={<DepartmentComputerScience />} />
            <Route path="/department-mathematics" element={<DepartmentMathematics />} />
            <Route path="/department-english" element={<DepartmentEnglish />} />
            <Route path="/department-hausa" element={<DepartmentHausa />} />

            <Route path="/integrated-science" element={<IntegratedScience/>} />
            <Route path="/arabic"element={<Arabic />} />
            <Route path="/islamic-studies"element={<IslamicStudies />} />
            <Route path="/economics"element={<Economics />} />
            <Route path="/social-studies" element={<SocialStudies />} />
            <Route path="/civil-law" element={<CivilLaw />} />
            <Route path="/sharia-civil-Law" element={<ShariaCivilLaw />} />
            <Route path="/home-management" element={<HomeManagement />} />
            <Route path="/department-education" element={<DepartmentEducation />} />
            <Route path="/primary-education" element={<PrimaryEducation />} />
            <Route path="/business-education" element={<BusinessEducation />} />
            <Route path="/public-admin" element={<PublicAdmin />} />
            <Route path="/accounting-audits" element={<AccountAudits />} />
            <Route path="/quranic-science" element={<QuranicScience />} />
            <Route path="/community-social-development" element={<CommunitySocialDevelopment />} />
            <Route path="/peace-conflict-resolution" element={<PeaceConflictResolution />} />
            <Route path="/library-information-science" element={<LibraryInformationScience />} />
            <Route path="/general-studies" element={<GeneralStudies />} />
           



          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Header />
//         <CollegeNameBanner />
//         <ToastContainer />
//         <div className="content">
//           <Container>
//             <Routes>
//               <Route path="/" element={<HomeScreen />} />
//               <Route path="/login" element={<LoginScreen />} />
//               <Route path="/register" element={<RegisterScreen />} />
//               <Route path="" element={<PrivateRoute />}>
//                 <Route path="/profile" element={<ProfileScreen />} />
//               </Route>

//               {/* School Routes */}
//               <Route path="/dean-school-of-science" element={<DeanSchoolOfScience />} />
//               <Route path="/dean-school-of-languages" element={<DeanSchoolOfLanguages />} />
//               <Route path="/dean-school-of-social-science" element={<DeanSchoolOfSocialScience />} />
//               <Route path="/dean-school-of-law" element={<DeanSchoolOfLaw />} />

//               <Route path="/centre-for-social-and-management-science" element={<CentreFSMS />} />
              
//               {/* Departments */}
//               <Route path="/public-admin" element={<PublicAdmin />} />
//               <Route path="/quranic-science" element={<QuranicScience />} />
//               <Route path="/community-social-development" element={<CommunitySocialDevelopment />} />
//               <Route path="/peaceconflictresolution" element={<PeaceConflictResolution />} />
              
//             </Routes>
//           </Container>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


/**  School of Sciences
Department of Computer science 
Department of Integrated Science 
Department of Mathematics 

School of Languages 
Department of English Language 
Department of Hausa Language 
Department of Arabic Languages 

School of Arts Social and Management Sciences 
Department of Economics 
Department of Social studies
Department of Islamic Studies

School of Law
Department of Civil Law
Department of Shariah and Civil Law

School of Education 
Department of Education 

School of Early Child Care Education 
Department of Primary Education.

School of Vocational and Technical Education 
Department of Business Education 
Department of Home management 

Centre for Social and Management Sciences.
Department of computer science 
Department of Business Administration 
Department of public Administration of Accounting and Audits
Department of Qur'anic Science 
Department of community and Social Development 
Department of peace and conflict studies

Department of Library and Information science 
Department of Shariah and Civil Law
Department of Civil law

School of General Studies
Department of Science 
Department of Arts and Social sciences 
Department of Languages


*/