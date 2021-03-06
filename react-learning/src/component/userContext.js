import React from "react";

//const UserContext = React.createContext("Default Value");

const UserContext = React.createContext();

const ProviderContext = UserContext.Provider;

const ConsumerContext = UserContext.Consumer;

export { ProviderContext, ConsumerContext };

export default UserContext;
