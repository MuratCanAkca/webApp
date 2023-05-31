
import { Col, Container, Row } from "reactstrap";
import HelloWorld from "./Components/01-Hello-Rold/01-hello-world";
import Jsx from "./Components/03-Jsx/03-jsx";
import Jsx2 from "./Components/03-Jsx/jsx2";
import Jsx3 from "./Components/03-Jsx/jsx3";
import Jsx4 from "./Components/03-Jsx/jsx4";
import Jsx5 from "./Components/03-Jsx/jsx5";
import Style1 from "./Components/04-styles/styles1";
import Clock1 from "./Components/05-Clock1/clock1";
import Greeting from "./Components/06-props/greetings";
import Clock2 from "./Components/07-Clock2/clock2";
import ImageGallery from "./Components/08-image1/image-gallery";
import Image1 from "./Components/08-image1/image1";
import ProfileCard from "./Components/09-profile-card/profile-card";
import BootstrapClassic from "./Components/10-bootstrap-classic.js/bootstrap-classix";
import BSDynamic from "./Components/10-bootstrap-classic.js/bootstrap-dynamic";
import ReactIcon from "./Components/11-icons/react-icons";
//import Header from "./Components/12-shop/header";
import Shop from "./Components/12-shop/shop";
import State from "./Components/13-state/state";
import Stateless from "./Components/13-state/stateless";
import Counter from "./Components/14-counter/counter";
import UseEffect from "./Components/18-use-effect/use-effect";
import UseRef from "./Components/20-useRef/useref";
import UserCards from "./Components/22-users-card/user-cards";
import Countries from "./Components/23-countries/countries";
import AxiosCrud from "./Components/24-axios-crud/axios-crud";
import Form1 from "./Components/25-forms/form1";
import Form2 from "./Components/25-forms/form2";
import Form3 from "./Components/25-forms/form3";
import Form4 from "./Components/25-forms/form4";
import Form5 from "./Components/25-forms/form5-validation";
import Form6 from "./Components/25-forms/form6";
import Menu from "./Components/00-home/menu/menu"
import Header from "./Components/00-home/header/header"
import { BrowserRouter , Routes , Route} from "react-router-dom"



function App() {
  return (
  <BrowserRouter>

    <Header/>

    <Container fluid>
      <Row>
        <Col sm={2}>
          <Menu/>
        </Col>
        <Col sm={10} className="p-5">
          <Routes>
            <Route path="/hello-world" element={<HelloWorld/>}/>
            <Route path="/03-jsx" element={<Jsx/>}/>
            <Route path="/jsx2" element={<Jsx2/>}/>
            <Route path="/jsx3" element={<Jsx3/>}/>
            <Route path="/jsx4" element={<Jsx4/>}/>
            <Route path="/jsx5" element={<Jsx5/>}/>
            
          </Routes>
        </Col>
      </Row>
    </Container>



    {/*   <HelloWorld/>
      <Jsx/>
      <Jsx2/>
      <Jsx3/>
      <Jsx4/>
      <Jsx5/>
      <Style1/>
      <Clock1/>
      <Greeting/>
      <Clock2 color="white" bgcolor="red"/>
      <Clock2 color="green" bgcolor="navy"/>
      <Image1/>
      <ImageGallery/> 
      <ProfileCard name="Murat Can Akca" location="İstanbul, Türkiye" shot="1" followers="10" following="10" avatar="image4.jpeg"/>
      <BootstrapClassic/>
      <BSDynamic/>
      <ReactIcon/>
      <Shop/>
      <Stateless/>
      <State/> 
      <Counter/>
      <UseEffect/>
      <RandomImage/>
      <UseRef/> 
      <UserCards/>
      <Countries/>
      <AxiosCrud/>
      <Form1/>
      <Form2/>
      <Form3/>
      <Form4/>
      <Form5/>
      <Form6/>*/}
      


  </BrowserRouter>
  );
}

export default App;
