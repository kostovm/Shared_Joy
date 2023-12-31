import React from 'react';;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Нещо се обърка...</h1>
          <p>&#129301; &#129301; &#129301;</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;