import { v4 as uuid } from "uuid";
export default function webMarkReducer(state, action) {
  switch (action.type) {
    case "opened":
      return state.map((webMark) =>
        webMark.id === action.payload.id
          ? { ...webMark, opened: !webMark.opened }
          : webMark
      );
    case "delete":
      return state.filter((webMark) => webMark.id !== action.payload.id);
    case "edit":
      return state.map((webMark) =>
        webMark.id === action.payload.id
          ? {
              ...webMark,
              title: action.payload.data.name,
              link: action.payload.data.link,
            }
          : webMark
      );
    case "add":
      return [
        ...state,
        {
          id: uuid(),
          opened: false,
          title: action.payload.name,
          link: action.payload.link,
        },
      ];
    default:
      return state;
  }
}
