import "./error.scss"


function Error() {
    return (
        <div class="container-error">
            <div class="error-code">404</div>
            <div class="error-message">Oops! Page not found. Please check your internet!</div>
            <div class="back-button"><a href="/">Go back to Home</a></div>
        </div>
    )
}
export default Error