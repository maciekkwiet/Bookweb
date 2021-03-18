import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { Box } from './Components/Box/Box';

const currentBook = {
  title: "Securing DevOps",
  authors: "Julien Vehent",
  rating: 5,
  desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks  ...",
  image: "https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg"
};


function App() {
  return (
    <Theme>
      <Button onClick={() => { }}>
        Zobacz pełny opis
      </Button>
      <Box
        title={currentBook.title}
        author={currentBook.authors}
        rate={currentBook.rating}
        review={currentBook.desc}
        image={currentBook.image}>
      </Box>

    </Theme>
  );
}

export default App;
