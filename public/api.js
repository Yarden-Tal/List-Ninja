/* CRUD API operations with Axios */

// GET
async function getAllTasks() {
  try {
    const tasksData = await axios.get("/tasks");
    return tasksData.data;
  } catch (e) {
    console.error(e);
  }
}
// POST
async function postTask(text) {
  try {
    const res = await axios.post("/tasks", { text });
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
// PUT
async function putTask(task) {
  try {
    const res = await axios.put("/tasks", { task });
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
// DELETE
async function deleteTask(taskId) {
  try {
    const res = await axios.delete(`/tasks/${taskId}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
