import TODO_API_URL from './TODO_API_URL'
export default async function deleteTodo(id) {
  const response = await fetch(`${TODO_API_URL}/${id}`, {
    method: 'DELETE'
  })

  if (!response) {
    throw new Error('Network response was not ok')
  }
  return {
    status: response.status,
    data: await response.json()
  }
}
