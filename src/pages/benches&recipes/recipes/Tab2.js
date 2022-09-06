import React, { useEffect, useState } from "react";
import "./recipetab2.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";
import { HpcoTest } from "./tests/HpcoTest";
import { KickoutTest } from "./tests/KickoutTest";
import { LeakageTest } from "./tests/LeakageTest";
import { MainReliefValveTest } from "./tests/MainReliefValveTest";
import { PortReliefValveSettingTest } from "./tests/PortReliefValveSettingTest";
import { PressureDropTest } from "./tests/PressureDropTest";

const item1 = {
  id: "1",
  name: "HPCO TEST",
};

const item4 = {
  id: "2",
  name: "KICKOUT TEST",
};
const item2 = {
  id: "3",
  name: "PRESSURE DROP TEST",
};
const item = {
  id: "4",
  name: "MAIN RELIEF VALVE TEST",
};
const item3 = {
  id: "5",
  name: "LEAKAGE TEST",
};
const item5 = {
  id: "6",
  name: "PORT RELIEF VALVE SETTING TEST",
};

function Tab2(props) {
  const [state, setState] = useState({
    tests: {
      title: "Tests",
      items: [item, item1, item2, item3, item4, item5],
    },
    selectedTests: {
      title: "Selected Tests",
      items: [],
    },
  });

  useEffect(() => {
    setState({
      ...state,
      selectedTests: {
        title: "Selected Tests",
        items: props.tests.Test_Sequence,
      },
    });
  }, [props.tests.Test_Sequence]);

  //console.log("sequence", state.selectedTests);

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    // Creating a copy of item before removing it from state
    const itemCopy = { ...state[source.droppableId].items[source.index] };

    setState((prev) => {
      prev = { ...prev };
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1);

      // Adding to new items array location
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      props.setTests({
        ...props.tests,
        ["Test_Sequence"]: prev.selectedTests.items,
      });

      return prev;
    });
  };

  return (
    <>
      <div
        className="column-heading"
        style={{
          marginTop: "5px",
          marginBottom: "5px",
          background: "#ffe0e6",
        }}
      >
        Test Pick & Order
      </div>
      <div className="recipetab2-container">
        <DragDropContext onDragEnd={handleDragEnd}>
          {_.map(state, (data, key) => {
            return (
              <div key={key} className={"column"}>
                <div className="column-heading">
                  <h3>{data.title}</h3>
                </div>
                <Droppable droppableId={key}>
                  {(provided, snapshot) => {
                    return (
                      <div className="droppable-col-container">
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className={"droppable-col"}
                        >
                          {data.items?.map((el, index) => {
                            return (
                              <Draggable
                                key={el.id}
                                index={index}
                                draggableId={el.id}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      className={`item ${
                                        snapshot.isDragging && "dragging"
                                      }`}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      {el.name}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </DragDropContext>
      </div>
      <div className="recipetab2-cont">
        {_.map(state, (data, key) => {
          if (key === "selectedTests")
            return (
              <div key={key}>
                <div
                  className="column-heading"
                  style={{ marginTop: "5px", background: "#ffe0e6" }}
                >
                  Test Details
                </div>
                {data.items?.map((e) => {
                  return (
                    <div>
                      {e.name === "MAIN RELIEF VALVE TEST" ? (
                        <MainReliefValveTest
                          testData={props.tests}
                          setTests={props.setTests}
                        />
                      ) : null}
                      {e.name === "HPCO TEST" ? (
                        <HpcoTest
                          testData={props.tests}
                          setTests={props.setTests}
                        />
                      ) : null}
                      {e.name === "PRESSURE DROP TEST" ? (
                        <PressureDropTest
                          testData={props.tests}
                          setTests={props.setTests}
                        />
                      ) : null}
                      {e.name === "LEAKAGE TEST" ? (
                        <LeakageTest
                          testData={props.tests}
                          setTests={props.setTests}
                        />
                      ) : null}
                      {e.name === "KICKOUT TEST" ? (
                        <KickoutTest
                          testData={props.tests}
                          setTests={props.setTests}
                        />
                      ) : null}
                      {e.name === "PORT RELIEF VALVE SETTING TEST" ? (
                        <PortReliefValveSettingTest
                          testData={props.tests}
                          setTests={props.setTests}
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            );
        })}
      </div>
    </>
  );
}

export default Tab2;
