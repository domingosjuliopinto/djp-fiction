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
            About
            </Content>
        </div>
    )
}

export default About