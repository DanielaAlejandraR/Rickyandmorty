import errorImg from "./image error.jpeg"

function ErrorPage(){
    return(
    <div>
        <img src={errorImg} alt="error404"/>
    </div>
    );
}

export default ErrorPage;