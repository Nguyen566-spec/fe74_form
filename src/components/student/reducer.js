import { DELETE, SUBMIT } from "./type";

const initialState = {
  studentList: [
    {
      id: 1,
      name: "Nguyen Duc Dung",
      phone: 763334666,
      email: "DucDung@gmail.com",
    },
    {
      id: 2,
      name: "Tran The Son",
      phone: 123456789,
      email: "TheSon@gmail.com",
    },
  ],
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE: {
      const data = [...state.studentList];
      const index = data.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        data.splice(index, 1);
      }
      state.studentList = data;
      return { ...state };
    }
    case SUBMIT: {
      const data = [...state.studentList];
      if (action.payload.id) {
      } else {
        const student = { ...action.payload };
        data.push(student);
      }
      state.studentList = data;
      return { ...state };
    }
    default:
      return state;
  }
};

export default studentReducer;
