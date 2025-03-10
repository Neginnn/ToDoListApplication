import styled from "@emotion/styled";
import { colours } from "@/styles/colours";
import { mediaQueries } from "@/styles/mediaQueries";
import { getBinaryMetadata } from "next/dist/build/swc";

const { mobileOnly, mediumUp, largeUp } = mediaQueries.device;
const { black, separatorColor, white, silver } = colours;

export const ToDoAppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${black};
  color: ${white};
  min-height: 100vh;
  padding: 20px;

  ${mobileOnly} {
    padding: 10px;
  }

  ${mediumUp} {
    padding: 30px;
  }

  ${largeUp} {
    padding: 50px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .add-todo-input {
    padding: 10px;
    border: 1px solid ${black};
    border-radius: 4px;
    margin-right: 10px;
    color: ${black};
    width: 100%;
    max-width: 600px;
  }
  .todo-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
  }
  .add-task-button {
    background-color: ${white};
    color: ${black};
    border: none;
    border-radius: 4px;
    font-weight: bold;
    text-transform: uppercase;
    width: 120px;
    padding: 12px 3px;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover {
      background-color: ${separatorColor};
    }
    ${mediumUp} {
      padding: 10px;
    }
  }
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${black};

    &:last-child {
      border-bottom: none;
    }
  }

  .add-todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    max-width: 600px;

    input {
      flex: 1;
      padding: 10px;
      border: 1px solid ${black};
      border-radius: 4px;
      margin-right: 10px;
    }

    button {
      padding: 10px 20px;
      background-color: ${black};
      color: ${white};
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: ${separatorColor};
      }
    }
  }
  /* style ToDoItem */
  ul {
    width: 100%;
    max-width: 600px;
    padding: 0;
    margin: 10px 0px;
  }
  .to-do-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${silver};
    align-items: center;
    padding: 10px 0px;
    width: 100%;
    max-width: 600px;
    &:last-child {
      border-bottom: none;
    }

    span {
      cursor: pointer;
    }

    button {
      padding: 5px 10px;
      background-color: ${black};
      color: ${white};
      border: 1px solid ${white};
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: ${separatorColor};
      }
    }
  }
`;
