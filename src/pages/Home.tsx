import Container from "../components/Container";
import Greeting from "../components/Greeting";
import Message from "../components/Message";

const Home = () => {
    return (
        <Container>
            <h2>Home page</h2>
            <Greeting name="Reyhaneh" />
            <Greeting name="Ali" />
            <div className="grid grid-cols-4 gap-4">
                <Message name="Mehdi Jeyrani" age={34} isMarried={false} />
                <Message name="Hossein Borji" age={22} isMarried={true} />
                <Message name="Habib Younesi" age={24} isMarried={false} />
                <Message name="Mirza Alipour" age={56} isMarried={true} />
                <Message name="Yasna Eftekhari" age={28} isMarried={true} />
                <Message name="Mohammad Najafi" age={30} isMarried={false} />
                <Message name="Milad Hodaei" age={20} isMarried={true} />
            </div>
        </Container>
    );
};

export default Home;
