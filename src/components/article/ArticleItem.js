import { CardFooter } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { IoIosTimer } from "react-icons/io";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import './ArticleItem.css';

function ArticleItem(props){
    return(
        <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className='py-2'>{props.title}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        <Link to={`/article/${props.id}`}>
          <span className='read-more'>
            <span>ادامه مقاله</span>
             <TiArrowLeftThick size="25px" />
          </span>
        </Link>
      </Card.Body>
      <CardFooter className='d-flex justify-content-between align-item-center py-3'>
        <span>
            نویسنده : {props.writter}
        </span>
        <span>
         <IoIosTimer /> {props.readingTime} دقیقه 
        </span>
      </CardFooter>
    </Card>
    )
}

export default ArticleItem;