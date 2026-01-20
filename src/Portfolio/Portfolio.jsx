import { Container } from 'react-bootstrap';
import style from './Portfolio.module.css';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import card1 from './../assets/img/card1.png';
import card2 from './../assets/img/card2.png';
import card3 from './../assets/img/card3.png';
import card4 from './../assets/img/card4.png';
import card5 from './../assets/img/card5.png';
import card6 from './../assets/img/card6.png';




function PortfolioSection(){
      return (
         <section className={style.PortfolioSection}>
      <Container className="text-center mt-5">
        <div className="porfolioTitle">
                    <h1 className={` mt-4 fw-bold ${style.porfolioTitle} `} > PORTFOLIO</h1>
                    <div className={`${style.divider} d-flex align-items-center justify-content-center gap-2 my-4`}>
                      <span className={style.line}></span>
                      <FaStar className= {style.FaStar} />
                      <span className={style.line}></span>
        </div>
        </div>
        

        <div className="row g-4">

          <div className="col-md-4 col-sm-6">
            <Card className="h-100">
              <Card.Img variant="top" src={card1} />
            </Card>
          </div>

          <div className="col-md-4 col-sm-6">
            <Card className="h-100">
              <Card.Img variant="top" src={card2} />
            </Card>
          </div>

          <div className="col-md-4 col-sm-6">
            <Card className="h-100">
              <Card.Img variant="top" src={card3} />
            </Card>
          </div>

           <div className="col-md-4 col-sm-6">
            <Card className="h-100">
              <Card.Img variant="top" src={card4} />
            </Card>
          </div>


           <div className="col-md-4 col-sm-6">
            <Card className="h-100">
              <Card.Img variant="top" src={card5} />
            </Card>
          </div>

           <div className="col-md-4 col-sm-6">
            <Card className="h-100">
              <Card.Img variant="top" src={card6} />
            </Card>
          </div>

        </div>

      </Container>
    </section>
      );


}

export default PortfolioSection;