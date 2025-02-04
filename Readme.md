# Export/Import 

1. Default Export/Import    

Export - export default <name of component / variable>  
Import - import <name of component / variable> from "<path>"

2. Named Export/Import      

Export - export const <name of component / variable>    
Import - import {<name of component / variable>} from "<path>"

# React Hooks - (normal JS Utility funtions)
1. Hook is a normal JS function which gives by react. it has multiple utility 
2. it is pre built
3. That funtion comes with super powers
4. it has multiple utility functions

- useState() - super powerful state variables in react 
- useEffect() 

# React
1. React is only good at Efficient DOM Operations and DOM manupulations      

Note: Virtual DOMis existed long time ago. React took that and builts its own algorithem over the virtal dom    

React Uses Reconciliation Algorithem (React Fiber)
1. Whenever changes in UI that is reconciliation
2. After react 16 that algorithem is known as React fiber
3. React fiber is the new way to find the difference and updating the dom    

         [Old Object] --------- [New Object]     
                         |(diff)   
                         |  
                  [Actual Object]  

Actual DOM - maens tags <div></div>       
Virtual DOM - representation of actual dom (Object)

**Note**- React is a single page application (just one page components inter change via client side routing)
**Note** - React has taken sevier steps (very important steps) to make the developer experience very fast

# Diff Algorithem
1. Diff Algorithem means finds out the difference between 2 virtual doms 

-----------------------------------------------------------------------------------------------------------------------------------------------

# Monolith Architecture 

# Microservice Architecture


# Fetch data from backend

**2 approches**

> 1. [loads]--->[API]--->[render]
> 2. [loads]--->[Render]--->[API]--->[render]    

**Note:** In react always using 2nd approach 

# useEffect()

1. When the body function will render it will render it. as soon as render cycle is finish it will just quickly call the callback function 
2. it takes 2 arguments one is callback function and other is dependency array.

**Note -** if no dependency array => useEffect is called on every render     
**Note -** if dependency array is empty = [] => useEffect is called on initial render(just once)  
**Note -** if dependency array is [btnSwitch] => useEffect is called everytime btnSwitch is updated

**Optional Chaining**

# Conditional rendering

Rendering bases of condition is known as Conditional Rendering 

**Note:** Whenever state variables update, react trigger a reconciliation cycle (re-renders the component)

# Important info

1. Never create state variables out side of the component
2. Never create state variables inside side of the if-else or for-loop or funtions **-** it will create inconsistance in program     

**note** - RAFCE - is shortcut for creating component

----------------------------------------------------------------------------------------------------------------------------------------
# Navigate Route
 
1. If navigate to a different page with out reloading the whole page - <Link> from react-router-dom.    

**Note**- dont use <a> tag because it reloads the whole page.         

# 2 types of routing in web apps 

1. Client side routing
       > just one page components inter change
2. Server side routing 
       > Make a network call and page coming from server


# Dynamic Routing 

- useParams   

----------------------------------------------------------------------------------------------------------------------------------------

# Class Component

- It is just normal JS class it extends react component        
- render method which return peice of JSX which will be displayed on to the UI      
- constructer funtion which receives the props - inside constructer use super(props)       
- inside constructer create state variable - this.state        
- Never update state variables directly   
- By using this.setState update the state variables     
- whenever class instance is created constructer will call 

# Component lifecycle

  > Constructer()---->render()---->ComponentDidMount()---->ComponentDidUpdate()    
  
- ComponentDidMount() - Run after render
- ComponentDidUpdate() - Run after update
- ComponentWillUnMount() - Run if go outside of the page

----------------------------------------------------------------------------------------------------------------------------------------

# Custom Hook

1. Function name starts with **use**

# **Chunking**       
  **code spliting**  
  **Dynamic bundling**      
  **Lazy loading**   
  **on demand loading**     
  **Dynamic import** 
  Browser file split into multiple file by using lazy loading. it increases the perfomance of the Application.  

1. use lazy keyword  
2. Inside <Suspence> will give that component
3. use fallback argument to present data
4. Always write lazy out side of the function or component

----------------------------------------------------------------------------------------------------------------------------------------
# Types used for adding Styles

1. CSS
2. SASS anD SCSS
3. Styled-Components
4. Tailwind CSS

1. Material UI
2. Bootstrap
3. Chakra UI
4. Ant Design

# Tailwind CSS

*Pros* 
1. Easy to write styles
2. Tailwind css is very light weight

*Cons*
1. Large styling makes code ugly

----------------------------------------------------------------------------------------------------------------------------------------

# Higher order component

1. Higher order component is a function takes a component (adding features) and return a component

# Controled component

1. If parent is controlling the child is called controlled component.

- lifting the state up 

# Props drilling

# React Context

1. use context which is kind of global place where our data is kept and anybody can access
2. use createContext to create context

**2 ways to using context**

1. By using hooks(useContext()) - it is used in functional component
2. .consumer - it is used in class component
  - .consumer is a component in that component have callback funtion that gets data inside that

**Update context**
1. by using .Provider inside that will pass data then every where in the application is updated.

**Note** - React context is very flexible.