import React,{createContext,useContext,useState} from "react";


const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  const ThemeContext = createContext(["light",() => {}]);
  
  function App() {
      const themehook = useState(themes.light);
    return (
      <ThemeContext.Provider value={themehook}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const [theme,setTheme] = useContext(ThemeContext);
    return (
      <p onClick = {() =>{
        setTheme(theme === themes.light ? themes.dark : themes.light)
      }}
      style={{ background: theme.background, color: theme.foreground,textAlign: "center",alignItems:"center"}}>
        <h2>COVID AWAERNESS</h2>
        <p1> Stopping the spreadstarts with you</p1>
        <hr></hr>
        
        <br></br>
        <h1>Build Your Immunity to Fight Covid: Vegetable pancake</h1>
        <p>Vegetable pancake made with immunity boosting ingredients like carrots, onions, etc, is not only healthy for your body, but also tastes delicious. For today’s segment of Build Your Immunity to Fight Covid, we got in touch with dietician, Neeta Thapa Saikia. She suggests the vegetable pancake along with chutney to help strengthen our immune system to fight Covid-19. As the name suggests, the recipe requires vegetables.</p>
        <h1>BENIFITS</h1>
        <p1>
        Vegetable pancake contains all the nutrients including protein, all types of minerals, vitamins and complex carbohydrates. It also has probiotics and fibres which may otherwise be lacking in the usual diet of a Covid patient. This recipe has ample protein from eggs, gram flour, curd and milk as well as nutrients from the veggies. The spices and herbs like black pepper, turmeric, jeera, sesame seed and garlic will help in boosting immunity. Curd is a good source of probiotics which keeps your gut healthy.
        </p1>
        <h1>Don’t forget the basics of good hygiene</h1>
        <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. This eliminates germs including viruses that may be on your hands.
Avoid touching your eyes, nose and mouth. Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.
Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately into a closed bin and wash your hands. By following good ‘respiratory hygiene’, you protect the people around you from viruses, which cause colds, flu and COVID-19.
Clean and disinfect surfaces frequently especially those which are regularly touched, such as door handles, faucets and phone screens.</p>
      <h1>What to do if you feel unwell</h1>
      <p>Know the full range of symptoms of COVID-19. The most common symptoms of COVID-19 are fever, dry cough, and tiredness. Other symptoms that are less common and may affect some patients include loss of taste or smell, aches and pains, headache, sore throat, nasal congestion, red eyes, diarrhoea, or a skin rash.
Stay home and self-isolate even if you have minor symptoms such as cough, headache, mild fever, until you recover. Call your health care provider or hotline for advice. Have someone bring you supplies. If you need to leave your house or have someone near you, wear a medical mask to avoid infecting others.
If you have a fever, cough and difficulty breathing, seek medical attention immediately. Call by telephone first, if you can and follow the directions of your local health authority.
Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. Local and national authorities and public health units are best placed to advise on what people in your area should be doing to protect themselves.
</p>
<h3>STAY HOME AND STAY SAFE</h3>

      </p>
    );
  }
  export default App;