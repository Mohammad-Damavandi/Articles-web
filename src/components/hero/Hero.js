import { Container, Row, Col } from "react-bootstrap";
import "./Hero.css";
import heroImage from "../../assets/images/undraw_my_code_snippets_re_4adu.svg";
import HeroBox from "../heroBox/HeroBox";
import { FaUserAlt, FaCode } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { BsFillSkipStartFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Hero() {

  useEffect( () => {
    AOS.init()
  } , [])


  return (
    <>
      <div className="heroContainer">
        <Container>
          <Row className="align-items-center">
            <Col className="col-12 col-md-5" data-aos="zoom-in">
              <img src={heroImage} className="heroImg img-fluid" />
            </Col>
            <Col className="col-12 col-md-7" data-aos="zoom-in">
              <h2 className="heroTitle">آمار ها باعث افتخار ما هستند</h2>
              <Row className="justify-content-center row-cols-1 row-cols-xl-2 gy-4">
                <Col>
                  <HeroBox title="تعداد دانشجو" count={3500}>
                    <FaUserAlt size="40px" />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title="تعداد مقاله" count={690}>
                    <MdArticle size="40px" />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title="تعداد دوره" count={19}>
                    <ImBooks size="40px" />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title="پروژه موفق" count={15}>
                    <FaCode size="40px" />
                  </HeroBox>
                </Col>
              </Row>
              <p className="startLearning">
                <b>شروع آموزش</b>
                <BsFillSkipStartFill size={"40px"} />
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eee"
          fillOpacity="1"
          d="M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,186.7C672,149,768,107,864,112C960,117,1056,171,1152,165.3C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Hero;
