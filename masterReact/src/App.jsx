import ListGroup from "./components/ListGroup";

import Button from "./components/Button";

import { useState } from "react";
import Alert from "./components/alert";

function App() {
  let items = ["new york", "hong kong", "paris", "san Fransisco", "london"];
  const [alertVisble, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisble && (
        <Alert onClose={() => setAlertVisible(false)}> my Alert</Alert>
      )}
      <Button
        color="secondary"
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        {" "}
        button{" "}
      </Button>
    </div>
  );
}
export default App;
