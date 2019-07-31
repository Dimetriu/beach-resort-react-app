import React, { Component, createContext } from 'react';

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return (
      <RoomContext.Provider value="hello">

      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export {
  RoomProvider,
  RoomConsumer,
  RoomContext
};
