import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboute from "./pages/aboute/aboute";
import Home from "./pages/home/home";
import AddArticle from "./pages/addArticle/addArticle";
import EditArticle from "./pages/editArticle/editArticle";
import Article from "./pages/article/Article";
import Articles from "./pages/articles/articles";
import Courses from "./pages/courses/Courses";

function App(){
    return(

        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/aboute" element={<Aboute />} />
            <Route path="/add-Article" element={<AddArticle />} />
            <Route path="/edit-Article/:articleId" element={<EditArticle />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/courses" element={<Courses />} />

          </Routes>
        </BrowserRouter>
        
    )
}

export default App;