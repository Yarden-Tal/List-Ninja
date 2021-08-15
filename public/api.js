/* CRUD API operations with Axios */

const port = process.env.PORT || 3000

// GET
async function getAllTasks() {
    const tasksData = await axios.get(`${port}/tasks`)
    return tasksData.data
}
// POST
async function postTask(text) {
    const res = await axios.post(`${port}/tasks`, { text })
    console.log(res);
    return res.data
}
// PUT
async function putTask(task) {
    const res = await axios.put(`${port}/tasks`, { task })
    console.log(res);
    return res.data
}
// DELETE
async function deleteTask(taskId) {
    const res = await axios.delete(`${port}/tasks/${taskId}`)
    console.log(res);
    return res.data

}