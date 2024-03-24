import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MyNavbar from "../../components/navbar/myNavbar";
import { useParams } from "react-router-dom";
import {Button , Form } from "react-bootstrap";
import Swal from "sweetalert2";

function EditArticle(){
      
    const articleId = useParams().articleId
    const [articleData , setArticleData] = useState({})

    useEffect( () => {
      axios.get(`http://localhost/react/api/articles/?id=${articleId}`)
      .then(response => setArticleData(response.data))
    } , [])

    const editArticleHandler = () => {
      
        axios.put(`http://localhost/react/api/articles/?id=${articleId}` , articleData)
        Swal.fire({
            title : 'مقاله با موفقیت ویرایش شد',
            timer : '1500',
            timerProgressBar : true,
            showConfirmButton : false
        })
    }

    const formHandler = (e) => {

        setArticleData({...articleData , [e.target.name] : e.target.value})
    }

    return(
        <>
        <MyNavbar />
        <div className="formContainer">
        <Form>
          <Form.Group  className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
            value={articleData.title}
             name="title" onChange={formHandler} type="text" placeholder="عنوان مقاله را وارد کنید"/>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label> توضیح کوتاه</Form.Label>
            <Form.Control
            value={articleData.description}
             name="description" onChange={formHandler}  type="text" placeholder="یک توضیح کوتاه درباره ی مقاله را وارد کنید"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
            value={articleData.writter}
             name="writter" onChange={formHandler} type="text" placeholder="نام نویسنده مقاله را وارد کنید"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
            value={articleData.category}
             name="category" onChange={formHandler} type="text" placeholder="موضوع مقاله را وارد  کنید"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
            value={articleData.image}
             name="image" onChange={formHandler} type="text" placeholder="آدرس عکس مقاله را وارد کنید"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
            value={articleData.readingTime}
             name="readingTime" onChange={formHandler} type="number" placeholder=""/>
          </Form.Group>

          <Button onClick={editArticleHandler} variant="primary" type="button">
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
  ); 
    

}
export default EditArticle;