// Import Packages
import { Layout, theme } from 'antd';

const { Content } = Layout;

function About() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return(
        <div>
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
            <h2>About</h2>
            <hr/>
            <p>
                DJPF is just an hobby. This helped me to develop a website, thus making me to learn and practice ReactJS and combine it with 
                the characters and storylines that I drew/planned a long time ago. A small request, please do not use the characters and 
                storylines as your own creation. However you can use the characters in your story as long as you give the credits. The characters 
                and their names, story and storylines, locations are all fictional and do not represent anyone, anything or any place in real life. 
                Any resemblance is completely coincidence. You can check out DJPF books on <a href='https://www.wattpad.com/user/DJP-Fiction'>Wattpad</a>.
                <br/>
                Below are the sites that I used to help me create contents for this website
                <ul>
                    <li><a href='https://www.iloveimg.com/resize-image/resize-png'>https://www.iloveimg.com/resize-image/resize-png</a></li>
                    <li><a href='https://squaremyimage.com/'>https://squaremyimage.com/</a></li>
                    <li><a href='https://favicon.io/favicon-converter/'>https://favicon.io/favicon-converter/</a></li>
                    <li><a href='https://www.fotor.com/images/create'>https://www.fotor.com/images/create</a></li>
                    <li><a href='https://imagecompressor.com/'>https://imagecompressor.com/</a></li>
                    <li><a href='https://www.iloveimg.com/compress-image'>https://www.iloveimg.com/compress-image</a></li>
                    <li><a href='https://vectorizer.ai/'>https://vectorizer.ai/</a></li>
                    <li><a href='https://svgconverter.app/free'>https://svgconverter.app/free</a></li>
                    <li><a href='https://imagy.app/change-image-to-16x9-aspect-ratio/'>https://imagy.app/change-image-to-16x9-aspect-ratio/</a></li>
                </ul>
            </p>
            </Content>
        </div>
    )
}

export default About