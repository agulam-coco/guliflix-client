import { toast } from "react-toastify";

export async function serverNotificationPromise(data, callback) {
  return await toast.promise(data, {
    pending: {
      render() {
        return "Fetching show data";
      },
    },
    success: {
      render() {
        return "Data fetched successfully 👌";
      },
      autoClose: 900,
    },
    error: {
      render({ err }) {
        // When the promise reject, data will contains the error
        return `Something weird happened 🤯\n`;
      },
      autoClose: 4000,
    },
  });
}
