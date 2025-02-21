import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  componentDidMount() {
    console.log("ErrorBoundary component has mounted");
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log("App is starting to render");

class AppWithMountLog extends React.Component {
  componentDidMount() {
    console.log("App component has mounted"); // Added console log
  }

  render() {
    return <App />;
  }
}

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppWithMountLog />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals.console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();