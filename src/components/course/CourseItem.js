import './CourseItem.css';
import {FaUsers} from 'react-icons/fa'
import {GiTeacher} from 'react-icons/gi'
import {BiDollar} from 'react-icons/bi'

function CourseItem(props){
        return (
            <div className="courseCardWrapper">
                <div className="courseCardImage">
                    <img className='courseImage' src={props.image} />
                    <p>
                        <FaUsers size='20px' />
                        <span>{props.studentCount}</span>
                    </p>
                </div>
                <div className="courseCardContent">
                    <h5 className='courseName'>{props.title}</h5>
                    <p className='courseDescription'>
                        {props.description}
                    </p>
                </div>
                <div className="courseCardTeacher">
                    <p>
                        <GiTeacher size='25px' />
                        مدرس :  {props.teacher}
                    </p>
                </div>
                <div className="courseCardFooter">
                    <p>
                        <button><b>ثبت نام دوره</b></button>
                    </p>
                    <p>
                        <BiDollar size='25px' />
                        <b>{props.progressPercent}</b>
                    </p>
                </div>
            </div>
        );
}

export default CourseItem;