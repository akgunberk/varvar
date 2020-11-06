import React from "react";

export const baseEnhancerHoc = <P extends object>(Component: React.ComponentType<P>) =>
  class MakeCategory extends React.Component<P> {
    render() {
      return <Component {...(this.props as P)} />;
    }
  };