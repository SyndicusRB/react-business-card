export function About() {
    return (
        <header>
            <img alt="Professional photograph" className="image" src="/src/images/image.jpg" />
            <h1>SyndicusRB</h1>
            <p className="title">Fullstack Developer</p>
            <small className="github-url">https://github.com/SyndicusRB</small>
            
            <div className="link-btns">
                <button className="link-email"><span className="email-icon"><i class="fa-solid fa-envelope"></i></span>Email</button>
                <button className="link-linkedin"><span className="linkedin-icon"><i class="fa-brands fa-linkedin"></i></span>LinkedIn</button>
            </div>

        </header>
    )
}