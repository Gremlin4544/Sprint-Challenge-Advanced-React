- [X] Why would you use class component over function components (removing hooks from the question)?
Class components give you access to state and use lifecycle methods which are not available to functional components (which is why we have to use hooks with functional components)

- [X] Name three lifecycle methods and their purposes.
1. componentDidMount() = called once after the initial render - helps  to get initial data from APIs
2. componentDidUpdate() = invoked after the updating of the initial render and checks if something can be done is props are changed
3. componentWillUnmount() = called immediately before the component is unmounted and destroyed

- [X] What is the purpose of a custom hook?
Custom hooks allow you to make your code more DRY. You can separate component logic into a reusable function. Custom hooks are good for writing them to cover various use cases.

- [X] Why is it important to test our apps?
To fix any false positives and make sure our application is working the way it should be once a user interacts with it. It is important to discover any bugs that might not be obvious without tests. Test also helps us to see when something is not working.