const statusManagement = {
  fetching: (draft) => {
    if (draft.status === "void") {
      draft.status = "pending";
      return;
    }
    if (draft.status === "rejected") {
      draft.error = null;
      draft.status = "pending";
      return;
    }
    if (draft.status === "resolved") {
      draft.status = "updating";
      return;
    }
    return;
  },
  resoldved: (draft, action) => {
    if (draft.status === "pending" || draft.status === "updating") {
      draft.data = action.payload;
      draft.status = "resolved";
      return;
    }
    return;
  },
  rejected: (draft, action) => {
    if (draft.status === "pending" || draft.status === "updating") {
      draft.status = "rejected";
      draft.error = action.payload;
      draft.data = null;
      return;
    }
    return;
  },
  reset: (draft) => {
    draft.status = "void";
    draft.error = null;
    draft.data = null;
  },
};

export default statusManagement;
