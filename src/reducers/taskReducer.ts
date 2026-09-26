export type Task = { id: number; text: string };

export type State = Task[];

export type Action =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number };

// Returns a new task list based on the action
export function taskReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload.trim() }];
    case "remove":
      return state.filter((task) => task.id !== action.payload);
    default:
      throw new Error("Unknown action type");
  }
}
