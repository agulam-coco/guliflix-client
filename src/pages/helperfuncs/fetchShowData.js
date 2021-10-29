import URL from "../../hostname/hostname";

export async function fetchShowData(show) {
  let res = await fetch(`${URL}/api/showinfo/${show}`);
  return await res.json();
}
