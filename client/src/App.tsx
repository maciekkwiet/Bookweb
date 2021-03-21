import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { Box } from './Components/Box/Box';


function App() {
  return (
    <Theme>
      <Button onClick={() => { }}>
        Zobacz pełny opis
      </Button>
      <Box
        title="Securing DevOps"
        author="Julien Vehent"
        rate={5}
        review="An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks  ..."
        image="https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg">
      </Box>

    </Theme>
  );
}

export default App;
