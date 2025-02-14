function Contact() {
    return (
        <div className="container-form">
            <div className="img-slide">
                <img src="https://media.istockphoto.com/id/1326259156/vector/secretary-woman-sitting-at-a-desk-responding-to-a-call-contact-us-speech-bubble-vector.jpg?s=612x612&w=0&k=20&c=aJK5UrswyMdZ_SeI8sykG4wnPPd1C7WgvIBCGqCVPvk="></img>
            </div>

            <div className="form-slide">
                <form className="contact-form">
                    <h1>Contact us</h1>
                    <div className="inputBox">
                        <input type="text" placeholder="username"></input>
                        <input type="password" placeholder="password"></input>
                    </div>

                    <div className="inputBox">
                        <input type="text" placeholder="name"></input>
                        <input type="text" placeholder="subject"></input>
                    </div>

                    <textarea placeholder="start typing here..." rows="10" cols="30"></textarea>
                </form>
            </div>
        </div>
    )
}

export default Contact