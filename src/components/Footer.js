import './Footer.css';

function Footer() {
    return (
        <footer>
            <p>This project was bootstrapped with&nbsp;
                <a 
                    href="https://github.com/facebook/create-react-app" 
                    target='_blank' 
                    rel="noopener noreferrer"
                >
                    Create React App
                </a> and is powered by&nbsp; 
                <a 
                href="https://developer.spotify.com/documentation/web-api" 
                target='_blank'
                rel="noopener noreferrer"
                >
                Spotify Web API
                </a>
                . Styles are powered by&nbsp;
                <a 
                target='blank' 
                href='https://react-bootstrap.github.io/'
                rel="noopener noreferrer"
                >
                React Bootstrap
                </a>.
            </p>
            <address><a 
            href="https://github.com/judygitsthejobdone" 
            target='_blank' 
            rel="noopener noreferrer"
            >
            Developed by Judah Mendez
            </a></address>
        </footer>
    );
  }
  
  export default Footer;