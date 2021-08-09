import { useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Companies } from "./components/companies";
import useButter from './useButter';

import "./App.css";


const App = () => {
  const [{ response, loading, error }, callAPI] = useButter();
  
  useEffect(() => {
    callAPI('page', 'retrieve', '*', 'homepage');
  }, [callAPI]);

  return (
    <div>
      <Navigation />
      {loading && <div>Loading...</div>}
      {response && !error && !loading && <Header data={response} />}
      <Companies/>
      <hr />
      {error && <div>There was an error: {error}</div>}
      {response && !error && !loading && <div className="content">
          {response.data.data.fields['content'].map((page, i) => (
            <div key={i}>
              <h2>{page['content-title']}</h2>
              <p>{page['content-text']}</p>
            </div>
          ))} 
      </div>
      }
      <Footer/>
    </div>
  );
};

export default App;
