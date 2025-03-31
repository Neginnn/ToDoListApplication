import styled from "@emotion/styled";
import { colours } from "@/styles/colours";
import { mediaQueries } from "@/styles/mediaQueries";

const { mobileOnly, mediumUp, largeUp } = mediaQueries.device;
const {
  green,
  black,
  separatorColor,
  white,
  silver,
  flushOrange,
  redRibbon,
  red,
} = colours;

export const ToDoAppStyle = styled.div`
  background-color: ${black};
  height: 100vh;
  padding: 50px 0px;
  /* Main container */
  .todo-app {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    background: ${white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  /* Input and Add button */
  .input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .input-container input {
    flex: 1;
    padding: 10px;
    border: 1px solid ${silver};
    border-radius: 5px;
    font-size: 16px;
  }

  .input-container button {
    padding: 10px 15px;
    background-color: ${green};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  .input-container button:hover {
    background-color: ${green};
  }

  /* Task List */
  .task-list {
    list-style: none;
    padding: 0;
  }

  /* Task Item */
  .task-item {
    display: flex;
    align-items: center;
    justify-content: end;
    background: ${white};
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    flex-wrap: wrap;
  }
  .item {
    margin-right: auto;
  }
  /* Buttons inside task items */
  .task-item button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: 0.3s;
    min-width: 50px;
  }

  .edit-btn {
    background-color: ${flushOrange};
    color: ${white};
  }

  .edit-btn:hover {
    background-color: ${flushOrange};
  }

  .delete-btn {
    background-color: ${redRibbon};
    color: ${white};
  }

  .delete-btn:hover {
    background-color: ${red};
  }

  /* Edit Input */
  .edit-input {
    flex: 1;
    padding: 5px;
    border: 1px solid ${silver};
    border-radius: 5px;
  }

  /* 🔹 RESPONSIVE DESIGN 🔹 */
  @media ${mobileOnly} {
    .todo-app {
      max-width: 90%;
      padding: 15px;
    }

    .input-container {
      flex-direction: column;
      gap: 5px;
    }

    .input-container input {
      width: auto;
      max-width: 100%;
    }
    .task-item .edit-input {
      width: -webkit-fill-available;
    }
    .input-container button {
      width: auto;
      max-width: 100%;
    }

    .task-item {
      flex-direction: column;
      align-items: flex-start;
      padding: 10px;
    }

    .task-item button {
      width: 100%;
      margin: 5px 0 0;
      padding: 10px 0px;
    }
  }
`;
