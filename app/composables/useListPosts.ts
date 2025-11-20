export default async function () {
  const res = await queryCollection("content").all();
  return useState("all-posts", () => {
    return res;
  });
}
