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